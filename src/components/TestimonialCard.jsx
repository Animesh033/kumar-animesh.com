import React from 'react'

function TestimonialCard(props) {

  const { clientImage, clientName, testimonial, profession } = props
  return (
    <>
      <div className="text-left">
        <i className="mb-4 fa fa-3x fa-quote-left text-primary" />
        <p className="mb-4 fs-4">{testimonial}</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid" src={clientImage} style={{ width: 60, height: 60 }} />
          <div className="ps-3">
            <p className="mb-1 text-primary fs-5">{clientName}</p>
            <i>{profession}</i>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialCard