import {useEffect, useState} from 'react'
import classNames from 'classnames'

function Spinner(props) {
    const [isLoading, setIsLoading] = useState(true)

    const btnClass = classNames('progress-bar', props?.className, {
        'hide': !isLoading,
        'show': isLoading
    });

    useEffect(() => {
        setIsLoading(false)
    }, [])

  return (
    <>
        <div id="spinner" className={"bg-white "+btnClass+" position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"}>
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </>
  )
}

export default Spinner