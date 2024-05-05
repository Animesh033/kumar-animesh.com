import React from 'react'

function Subscribe() {
  return (
    <>
        <div className="p-5 text-center bg-secondary">
          <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
          <p className="text-white">Subscribe and get my latest article in your inbox</p>
          <div className="position-relative w-100">
            <input className="py-3 border-0 form-control bg-dark w-100 ps-4 pe-5" type="text" id='sub_ur_email' name='sub_ur_email' placeholder="Your email" />
            <button type="button" className="top-0 py-2 mt-2 btn btn-primary position-absolute end-0 me-2">Subscribe</button>
          </div>
        </div>
    </>
  )
}

export default Subscribe