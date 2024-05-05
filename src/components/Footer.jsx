import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {

  let dateRange = `2018 - ${new Date().getFullYear()}`
  return (
    <>
      <div className="p-5 text-center bg-secondary text-light">
        <div className="mb-4 d-flex justify-content-center">
          <SocialMedia />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <a className="px-3 text-light border-end" href="#">Privacy</a>
          <a className="px-3 text-light border-end" href="#">Terms</a>
          <a className="px-3 text-light border-end" href="#">FAQs</a>
          <a className="px-3 text-light" href="#">Help</a>
        </div>
        {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
        <p className="m-0">All Rights Reserved | ©{dateRange} | <a href="https://github.com/Animesh033" target='_blank'>Animesh Kumar</a> - Full Stack Developer | PHP | Laravel | MySql | Vue.js | React.js | Node.js | Express.js | MongoDB</p>
      </div>
    </>
  )
}

export default Footer