import React from 'react'
import Spinner from './Spinner'
import MyProfile from './MyProfile'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Experience from './Experience'
import Subscribe from './Subscribe'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonial from './Testimonial'
import ContactMe from './ContactMe'
import Footer from './Footer'
import BackToTop from './BackToTop'

function Home3() {
    return (
        <>
            {/* Spinner Start */}
            <Spinner />
            {/* Spinner End */}
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 sticky-lg-top vh-100">
                        <MyProfile />
                    </div>
                    <div className="col-lg-8">
                        {/* About Start */}
                        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                            <AboutMe />
                        </section>
                        {/* About End */}
                        {/* Skills Start */}
                        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                            <Skills />
                        </section>
                        {/* Skills End */}
                        {/* Expericence Start */}
                        <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
                            <Experience />
                        </section>
                        {/* Expericence End */}
                        {/* Subscribe Start */}
                        <section className="wow fadeInUp" data-wow-delay="0.1s">
                            <Subscribe />
                        </section>
                        {/* Subscribe End */}
                        {/* Services Start */}
                        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                            <Services />
                        </section>
                        {/* Services End */}
                        {/* Portfolio Start */}
                        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                            <Portfolio />
                        </section>
                        {/* Portfolio End */}
                        {/* Testimonial Start */}
                        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                            <Testimonial />
                        </section>
                        {/* Testimonial End */}
                        {/* Contact Start */}
                        <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
                            <ContactMe />
                        </section>
                        {/* Contact End */}
                        {/* Footer Start */}
                        <section className="wow fadeIn" data-wow-delay="0.1s">
                            <Footer />
                        </section>
                        {/* Footer End */}
                    </div>
                </div>
            </div>
            {/* Back to Top */}
            <BackToTop />
        </>
    )
}

export default Home3