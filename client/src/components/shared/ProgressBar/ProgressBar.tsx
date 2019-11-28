import React from 'react';
import './style.scss';

interface IProps {
    value: number,
}

const ProgressBar = (props: IProps) => {
    const { value } = props;
    return (
        <>
            <div className="progress-bar">
                <div className="progress-bar__item" style={{ width: `${value}%` }}></div>
            </div>
            <div className="percentage">
                <span className="percentage__value" style={{ paddingLeft: `${value - 2}%` }}>{Math.round(value)}%</span>
            </div>
        </>
    )
}

export default ProgressBar;
