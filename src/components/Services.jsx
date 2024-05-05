import React, { useCallback, useEffect } from 'react'
import ServiceCard from './ServiceCard'
import data from '../data/index.json'

function Services() {

    // console.log(data.services)

    const serviceList = data.services.map((service, i) => {
        return (
            <div className="col-md-6" key={`${service.title}_${i}`}>
                <ServiceCard className={service.className} title={service.title} description={service.description} key={`${service.title}__${i}`} />
            </div>
        )
    })
    return (
        <>
            <h1 className="pb-3 mb-5 title">Services</h1>
            <div className="row g-4">
                {serviceList}
            </div>
        </>
    )
}

export default Services