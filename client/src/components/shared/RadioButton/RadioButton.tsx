import React from 'react';
import './style.scss';

interface IProps {
    className?: string,
    value: string,
    isChecked: boolean,
    onChange?: any,
    name: string,
}

const RadioButton = (props: IProps) => {
    const { className, value, isChecked, onChange, name } = props;
    return (
        <input
            type="radio"
            value={value}
            checked={isChecked}
            name={name}
            className={`radio-button ${className ? className : ''} ${isChecked ? 'radio-button--checked' : ''}`}
            onChange={onChange}
        />
    )
}

export default RadioButton;
