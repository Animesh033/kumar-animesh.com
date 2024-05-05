import React, { useEffect, useState, useCallback, useMemo } from 'react'
import TheTyped from './TheTyped'
import data from "../data/index.json"
import AboutCard from './AboutCard'
import { getGithubData } from '../utils/github'

function AboutMe() {

    const myDeatils = data.myDetails
    const personalDetails = myDeatils.personal
    // console.log(personalDetails)
    const [githubInfo2, setGithubInfo2] = useState({})
    const [isBtnClicked, SetIsBtnClicked] = useState(false)

    // const [isBtnClicked, setIsBtnClicked] = useState(false)

    useEffect(() => {
        // (async () => {
        try {
            // getGithubData().then((gitInfo) => {
            //     setGithubInfo2({ ...gitInfo })

            // }).catch(error => {
            //     console.log(error)
            // })

        } catch (error) {
            console.log(error)
        }
        // })()

        // Cleanup function
        return () => {
            // Unsubscribe or clear timers
        };

    }, [isBtnClicked])

    // setGithubInfo2(githubInfo)




    const handleBtnClick = () => {
        SetIsBtnClicked((prevIsBtnClicked) => {
            console.log(prevIsBtnClicked)
            return isBtnClicked !== prevIsBtnClicked
        })
    }


    // getGithubInfo()

    // useEffect(() => {

    // }, [])

    return (
        <>
            {/* <div>
                <button onClick={handleBtnClick}>Refresh</button>
            </div> */}
            <h1 className="pb-3 mb-5 title">About Me</h1>
            <p>
                {myDeatils['About Me']}
            </p>
            <p>
                <b>
                    <span className='text-primary'>Having experience on: &nbsp;</span>
                    <TheTyped typeSpeed={80} loop={true} typedText={myDeatils['Having experience on']} />
                </b>

            </p>
            <div className="mb-4 row">
                {
                    Object.keys(personalDetails).map(key => {
                        return <AboutCard key={key} mykey={key} value={personalDetails[key]} />
                    })
                }

                {/* <div className="py-1 col-sm-6">
                    <span className="fw-medium text-primary">Job:</span> Looking for new Opportunity
                </div>
                <div className="py-1 col-sm-6">
                    <span className="fw-medium text-primary">Notice Period:</span> Immediate Joiner
                </div>
                <div className="py-1 col-sm-6">
                    <span className="fw-medium text-primary">Freelance:</span> Available
                </div> */}
            </div>
            <div className="row g-4">
                <div className="col-md-4 col-lg-6 col-xl-4">
                    <div className="p-4 d-flex bg-secondary">
                        <h1 className="flex-shrink-0 mb-0 display-5 text-primary" data-toggle="counter-up">5</h1>
                        <div className="ps-3">
                            <p className="mb-0">Years of</p>
                            <h5 className="mb-0">Experience</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4">
                    <div className="p-4 d-flex bg-secondary">
                        <h1 className="flex-shrink-0 mb-0 display-5 text-primary" data-toggle="counter-up">{githubInfo2?.totalCommits || 990}</h1>
                        <div className="ps-3">
                            <p className="mb-0">Total</p>
                            <h5 className="mb-0">Commits</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-4">
                    <div className="p-4 d-flex bg-secondary">
                        <h1 className="flex-shrink-0 mb-0 display-5 text-primary" data-toggle="counter-up">{githubInfo2?.totalRepos || 82}</h1>
                        <div className="ps-3">
                            <p className="mb-0">Github </p>
                            <h5 className="mb-0">Repos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe