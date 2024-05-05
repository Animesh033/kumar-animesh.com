import React from 'react'

function Company(props) {

    const {designation, company, duration, description} = props
  return (
    <>
    <div className="mb-4 position-relative">
        <span className="bi bi-arrow-right fs-4 text-light position-absolute" style={{top: '-5px', left: '-50px'}} />
        <h5 className="mb-1">{designation}</h5>
        <p className="mb-2">{company} | <small>{duration}</small></p>
        <p>{description}</p>
    </div>
    </>
  )
}

export default Company