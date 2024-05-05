// import React from 'react'

import { useEffect } from "react"
import TestimonialCard from "./TestimonialCard";
import data from '../data/index.json'

// import $ from 'jquery';
// window.$ = $;

function Testimonial() {
    const testimonials = data.testimonials
    // console.log(testimonials)
    useEffect(() => {
        // startCarousel();
    }, [])

    const startCarousel = async () => {
        // Testimonials carousel
        // await import('../assets/js/main.js');
        
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1
        });
    }
  return (
    <>
        <h1 className="pb-3 mb-5 title">Testimonial</h1>
        <div className="owl-carousel testimonial-carousel">
            {testimonials.map((testimonial) => {
                return <TestimonialCard key={testimonial.client_image} clientImage={testimonial.client_image} clientName={testimonial.client_name} testimonial={testimonial.testimonial} profession={testimonial.profession} />
            })}
        </div>
    </>
  )
}

export default Testimonial