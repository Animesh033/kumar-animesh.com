import { useEffect, useState } from 'react'
import TheTyped from './TheTyped'
import SocialMedia from './SocialMedia'

import myResumePDF from '../assets/docs/Animesh_Kumar_P_Full_Stack_Engineer.pdf'
import DownloadBtn from './DownloadBtn'

function MyProfile() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <>
      <div className="overflow-auto text-center shadow d-flex flex-column h-100">
        <img className="mb-4 w-100 img-fluid" src="cv/img/DSC_0694.jpeg" alt="profile.jpg" />
        <h1 className="mt-2 text-primary">Animesh Kumar</h1>
        <div className="mb-4" style={{ height: 22 }}>
          <h4 className="typed-text-output d-inline-block text-light" >
            <div className={"typed-text" + show ? "d-block" : "d-none"}>
              <TheTyped typeSpeed={50} loop={false} className="typed-text" typedText="PHP Developer, Software Engineer, Back End Developer, Front End Developer, Full Stack Engineer, Lead Technology" />
            </div>
          </h4>
        </div>
        <div className="mt-auto mb-3 d-flex justify-content-center">
          <SocialMedia />
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
          {/* <Link className="btn w-50 border-end" to={myResumePDF} target="_blank">Download CV</Link> */}
          <DownloadBtn filePath={myResumePDF} fileName={"Animesh-s-resume.pdf"} />
          <a href="#contact" className="btn w-50 btn-scroll">Contact Me</a>
        </div>
      </div>
    </>
  )
}

export default MyProfile