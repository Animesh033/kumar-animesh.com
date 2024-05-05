import React from 'react'

function AboutCard(props) {

    const { mykey, value } = props
    return (
        <>
            <div className="py-1 col-sm-6">
                <span className="fw-medium text-primary">{mykey}:</span> {value}
            </div>
        </>
    )
}

export default AboutCard