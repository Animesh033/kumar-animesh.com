import React, { useState } from 'react'
import AboutMe from './AboutMe'
import MyApp from './MyApp'

function About() {

  const [isBtnClicked, SetIsBtnClicked] = useState(true)


  const handleBtnClick = () => {
    SetIsBtnClicked((prevIsBtnClicked) => {
      console.log(prevIsBtnClicked)
      return isBtnClicked === prevIsBtnClicked
    })
  }

  return (
    <>
      <MyApp>
        <AboutMe />
      </MyApp>
    </>
  )
}

export default About