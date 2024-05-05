import React, { useState, useEffect } from 'react';
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_PERSONAL_TOKEN });

const Repositories = () => {
    const [totalCommits, setTotalCommits] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all repositories for the authenticated user
                const reposResponse = await octokit.request('GET /user/repos', {
                    per_page: 1000 // Fetch up to 100 repositories per page
                });

                let total = 0;

                // Iterate through each repository and fetch commit count
                for (const repo of reposResponse.data) {
                    const commitsResponse = await octokit.request('GET /repos/{owner}/{repo}/commits', {
                        owner: repo.owner.login,
                        repo: repo.name,
                        per_page: 1 // Fetch only 1 commit to get the total count
                    });
                    total += commitsResponse.data.length;
                }

                setTotalCommits(total);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Total Commits: {totalCommits}</h1>
        </div>
    );
};

export default Repositories;
