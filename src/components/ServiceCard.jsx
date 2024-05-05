import classNames from 'classnames'
import React from 'react'

function ServiceCard(props) {

  const { title, description, className } = props

  const classes = classNames(
    "mx-auto mb-4 fa-2x"
  )
  return (
    <>
      <div className="service-item">
        <i className={classes} />
        <h5 className="mb-2">{title}</h5>
        <p className="mb-0">{description}</p>
      </div>
    </>
  )
}

export default ServiceCard