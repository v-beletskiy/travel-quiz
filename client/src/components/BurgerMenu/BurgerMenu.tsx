import React from 'react';
import './style.scss';

const getBurgerMenuItems = () => {
    const burgerMenuItems = [];
    const burgerMenuItemsQuantity = 3;
    for (let i = 0; i < burgerMenuItemsQuantity; i++) {
        burgerMenuItems.push(<div className={`burger-menu-container__item burger-menu-container__item--${i}`}></div>)
    }
    return burgerMenuItems;
}

const BurgerMenu = () => {
    return (
        <div className="burger-menu-container">
            {
                getBurgerMenuItems()
            }
        </div>
    )
}

export default BurgerMenu;
