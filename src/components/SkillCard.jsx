import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import CounterUp from './CounterUp'

function SkillCard(props) {

    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [progressWidth, setProgressWidth] = useState('0%')

    const btnClass = classNames('progress-bar', props?.className, {
        'btn-pressed': isPressed,
        'btn-over': !isPressed && isHovered,
    });

    useEffect(() => {
        let widthStyle = props.max + '%'
        setProgressWidth(widthStyle)
    }, []);

    return (
        <>
            <div className={props.colMd6}>
                <div className="mb-4 skill">
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">{props.countupText}</p>
                        <p className="mb-2">
                            <CounterUp min={props.min} duration={props.duration} max={props.max} />
                            <span>%</span>
                        </p>
                    </div>
                    <div className="progress">
                        <div className={btnClass} role="progressbar" aria-valuenow={props.max} aria-valuemin={props.min} aria-valuemax={props.max} style={{ width: progressWidth }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCard