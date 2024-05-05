import React from 'react'
import { createContactMe } from '../utils/callapi';

function ContactMe() {

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted...")

    const fd = new FormData(event.target)

    const data = Object.fromEntries(fd.entries())

    console.log(data)

    if (validateEmail(data.email)) {

      const response = createContactMe(data)

      console.log(response)

      if (response) {
        // Resetting the form
        event.target.reset()
      }

    } else {
      alert("Please enter valid email!")
    }


  }
  return (
    <>
      <h1 className="pb-3 mb-5 title">Contact Me</h1>
      <p className="mb-4">If you want to contact me, you can use the following contact form. You can also call on my mobile at <a href="tel:+917767985032">+91 7767985032</a> or email me at <a href="mailto:kumar.animesh303@gmail.com" target='_blank'>kumar.animesh303@gmail.com</a></p>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input type="text" className="border-0 form-control bg-secondary" id="name" name='name' required autoComplete='true' placeholder="Your Name" />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input type="email" className="border-0 form-control bg-secondary" id="email" name='email' required autoComplete='true' placeholder="Your Email" />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input type="text" className="border-0 form-control bg-secondary" id="subject" name='subject' required placeholder="Subject" />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea className="border-0 form-control bg-secondary" placeholder="Leave a message here" id="message" name='message' required style={{ height: 200 }} defaultValue={""} />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="py-3 btn btn-primary w-100" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactMe