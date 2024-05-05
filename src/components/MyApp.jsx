import React from 'react'
import Spinner from './Spinner'
import BackToTop from './BackToTop'

function MyApp(props) {
  return (
    <>
      <Spinner />
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
              {props.children}
            </section>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  )
}

export default MyApp