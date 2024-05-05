
import { Octokit } from 'octokit'

const getTotalCommits = async (username) => {
    try {
        // Fetch all repositories of the user
        const response = await Octokit.request('GET /users/{username}/repos', {
            username: username,
            per_page: 1000 // GitHub API default is 30, you can increase this if necessary
        });

        let totalCommits = 0;

        // Iterate through each repository
        for (const repo of response.data) {
            // Fetch the commit history of the repository
            const commitsResponse = await Octokit.request('GET /repos/{owner}/{repo}/commits', {
                owner: username,
                repo: repo.name,
                per_page: 1000 // GitHub API default is 30, you can increase this if necessary
            });

            // Add the number of commits in the repository to the total
            totalCommits += commitsResponse.data.length;
        }

        return totalCommits;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}


const getGithubData = async () => {
    try {

        // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
        const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_PERSONAL_TOKEN });

        // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
        const {
            data: { login },
        } = await octokit.rest.users.getAuthenticated();

        console.log("Hello, %s", login);

        // const commits = await octokit.rest.repos.listCommits({
        //     owner: login,
        //     repo: import.meta.env.VITE_GITHUB_REPO
        // });

        // console.log("Commits: ", commits.data.length)

        // const branches = await octokit.rest.repos.listBranches({
        //     owner: login,
        //     repo: 'kumar-animesh.com'
        // });

        // console.log("Branches: ", branches.data.length)

        try {
            const repos = await octokit.rest.repos.listForUser({
                username: login,
                page: 1,
                per_page: 10000
            });

            const allRepos = repos.data.map(repo => repo.name)

            let totalCommits = 0
            for (const repo of allRepos) {
                // console.log(repo)
                let repoName = repo
                // console.log(repoName)
                if (repoName === 'Blank') {
                    // console.log(repo)
                }
                // const content = await octokit.rest.repos.getContent({
                //     owner: login,
                //     repo: repoName,
                //     // path: repo.url
                // });
                // if (repoName !== 'Blank') {
                try {
                    const commits = await octokit.rest.repos.listCommits({
                        owner: login,
                        repo: repoName,
                        page: 1,
                        per_page: 1000,
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28'
                        }
                    });
                    console.log(`${repoName} => ${commits.data.length}`)

                    let commitsLength = commits.data.length

                    totalCommits += parseInt(commitsLength)

                } catch (error) {
                    console.log(error.message)
                }

                // }
            }
            // allRepos.forEach(async (repo) => {


            // })
            // console.log("Repos: ", repos.data.length)

            // let commitsCount = totalCommits;

            // console.log("totalCommits ", commitsCount)

            // console.log(repos.data[0].full_name)

            // new Promise((res) => {
            //     res()
            // })

            const data = {
                githubUserName: login,
                // commitsOnMySite: commits.data.length,
                // totalBranches: branches.data.length,
                totalRepos: allRepos.length,
                totalCommits: totalCommits
            }
            return data
        } catch (error) {
            console.log(error.message)
        }

    } catch (error) {
        console.log(error.message)
    }


}

export { getGithubData }