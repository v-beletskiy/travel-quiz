import React from 'react';
import './style.scss';

interface IProps {
    className?: string,
}

const Spinner = (props: IProps) => {
    const { className } = props;

    return (
        <>
            <div className={`spinner ${className}`}>
                <div />
                <div />
                <div />
            </div>
        </>
    )
}

export default Spinner;
