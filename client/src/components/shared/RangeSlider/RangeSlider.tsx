import React, { useState } from 'react';
import * as CSS from 'csstype';
import './style.scss';

interface IProps {
    className?: string,
    minValue?: number,
    maxValue?: number,
    onChange?: Function,
    value?: number,
    width?: number,
    height?: number,
    zCoord?: number,
    step?: number,
}

const getRectangleCoords = (width: number, height: number, zCoord: number) => {
    const rectangleCoords: CSS.Properties = {
        ['--rectangleWidth' as any]: `${width}px`,
        ['--rectangleHeight' as any]: `${height}px`,
        ['--rectangleZCoord' as any]: `${zCoord}px`,
    };
    return rectangleCoords;
}

const getInputRectangleWidthStyle = (value: number, maxValue: number) => {
    const width = value / maxValue * 100;
    const inputRectangleWidthStyle: CSS.Properties = {
        ['--highlightedInputValue' as any]: `${width}%`,
    };
    return inputRectangleWidthStyle;
}

const RangeSlider = (props: IProps) => {
    const { className, minValue, maxValue, onChange, value, width, height, zCoord, step } = props;
    return (
        <div className={`range-slider-container ${className}`} style={getRectangleCoords(width, height, zCoord)}>
            <div className="range-slider-container__side range-slider-container__side--front" style={getInputRectangleWidthStyle(value, maxValue)} >
                <div className="range-slider-price-tag">${value}</div>
            </div>
            <div className="range-slider-container__side range-slider-container__side--back" />
            <div className="range-slider-container__side range-slider-container__side--top" style={getInputRectangleWidthStyle(value, maxValue)} />
            <div className="range-slider-container__side range-slider-container__side--bottom" style={getInputRectangleWidthStyle(value, maxValue)} />
            <div className="range-slider-container__side range-slider-container__side--right" />
            <div className="range-slider-container__side range-slider-container__side--left" />
            <input className="range-slider-container__inputFront" type="range" min={minValue} max={maxValue} step={step}
                onChange={e => onChange(Number(e.target.value))} 
            />
            <input className="range-slider-container__inputTop" type="range" min={minValue} max={maxValue}
                onChange={e => onChange(Number(e.target.value))}
            />
        </div>
    )
}

export default RangeSlider;
