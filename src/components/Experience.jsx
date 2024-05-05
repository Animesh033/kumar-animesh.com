import React from 'react'
import Company from './Company'
import data from '../data/index.json'

function Experience() {

    const experienceList = data.experiences.map((experience) => {
        return <Company 
        designation={experience.designation}
        company={experience.company}
        duration={experience.duration}
        description={experience.description}
        key={experience.company} />
    })
    
  return (
    <>
        <h1 className="pb-3 mb-5 title">Expericence</h1>
        <div className="pt-2 border-2 border-start border-light ps-5">
            {experienceList}
        </div>
    </>
  )
}

export default Experience