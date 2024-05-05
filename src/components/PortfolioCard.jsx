import React from 'react'
import classNames from 'classnames'

function PortfolioCard(props) {

    const { imgName, imgPath, imgLink, isBackend } = props

    const className = classNames(props.className, {
        'first': isBackend,
        'second': !isBackend
    })

    return (
        <>
            <div className={"mb-4 col-md-6 portfolio-item " + className}>
                <div className="mb-2 overflow-hidden position-relative">
                    <img
                        className="img-fluid w-100"
                        src={imgPath}
                        alt={imgName}
                    />
                    <div className="portfolio-btn d-flex align-items-center justify-content-center">
                        <a href={imgPath} data-lightbox="portfolio">
                            <i className="bi bi-plus text-light" />
                        </a>
                        <a href={imgLink} target="_blank"><i className="bi bi-link text-light" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard