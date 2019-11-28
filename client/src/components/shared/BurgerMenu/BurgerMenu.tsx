import React from 'react';
import './style.scss';

const getBurgerMenuItems = (items: number) => {
    const burgerMenuItems = [];
    for (let i = 0; i < items; i++) {
        burgerMenuItems.push(<div key={i} className={`burger-menu-container__item burger-menu-container__item--${i}`}></div>)
    }
    return burgerMenuItems;
}

interface IProps {
    items: number
}

const BurgerMenu = (props: IProps) => {
    const { items } = props;
    return (
        <div className="burger-menu-container">
            {
                getBurgerMenuItems(items)
            }
        </div>
    )
}

export default BurgerMenu;
