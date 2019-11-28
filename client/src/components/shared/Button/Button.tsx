import React from 'react';
import './style.scss';

interface IProps {
    children?: any,
    className?: string,
    onClick?: (event: React.MouseEvent) => void,
    isDisabled?: boolean,
}

const Button = (props: IProps) => {
    const { children, className, onClick, isDisabled } = props;
    return (
        <button className={`questionnaire-button ${className} ${isDisabled ? 'questionnaire-button--disabled' : ''}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
