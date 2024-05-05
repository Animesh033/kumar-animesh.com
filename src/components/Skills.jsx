import React from 'react'

import SkillCard from './SkillCard'
// import SkillHeading from './SkillHeading'
import data from '../data/index.json'

function Skills() {

  const skills = data.skills
  return (
    <>
      {/* 
    Bootstrap (4 years), JavaScript (5 years), React JS (3 years), Node JS (3 years), Express JS (3 years), MongoDB(3 years) PHP (5 years), Laravel (5 years), MySQL (5 years), Vue JS (3 years)
     */}
      <h1 className="pb-3 mb-5 title">Skills</h1>
      <div className="row">
        {/* <SkillHeading /> */}
        {
          skills.map((skill, indx) => {
            let isParent = (indx % 5 === 0) ? "col-sm-6" : "col-sm-6"

            return <SkillCard colMd6={isParent} key={skill.countupText} className={skill.className} min={skill.min} duration={skill.duration} max={skill.max} countupText={skill.countupText} />
          })
        }
      </div>
    </>
  )
}

export default Skills