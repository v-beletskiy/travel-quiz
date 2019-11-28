import React from 'react';
import './style.scss';

interface IProps {
    className?: string,
    onChange?: any,
    isChecked?: boolean,
    name?: string,
}

const Checkbox = (props: IProps) => {
    const { className, onChange, isChecked, name } = props;
    return (
        <input
            type="checkbox"
            className={`checkbox ${className ? className : ''} ${isChecked ? 'checkbox--checked' : ''}`}
            onChange={onChange} name={name}
        />
    )
}

export default Checkbox;
