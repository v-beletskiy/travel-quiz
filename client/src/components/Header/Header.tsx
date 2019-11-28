import React, { useState } from 'react';
import './style.scss';
import BurgerMenu from '../shared/BurgerMenu/BurgerMenu';
const DropdownArrow = require("../../assets/icons/dropdownArrow.svg").default;
const closeMobileMenuIcon = require("../../assets/icons/closeMobileMenu.png");

interface IHeaderProps {
	navigationItems: { name: string, link: string }[],
	name: string,
	isMobileMenuOpen: boolean,
	toggleMobileMenu: Function,
}

interface INavProps {
	navigationItems: { name: string, link: string }[],
}

const Nav = (props: INavProps) => {
	const { navigationItems } = props;
	return (
		<>
			{navigationItems.map(item => {
				return (
					<li key={item.name} className="header-navigation-item">
						<a href={item.link}>{item.name}</a>
					</li>
				)
			})}
		</>
	)
}

const Header = (props: IHeaderProps) => {
	const { navigationItems, name, isMobileMenuOpen, toggleMobileMenu } = props;
	return (
		<header className={`header ${isMobileMenuOpen ? 'header--mobile-open' : ''}`}>
			<div className="header-first-block">
				<div className="header-first-block__logo"><a href="/">Travel Quiz</a></div>
				<ul className="header-first-block__navigation-container">
					<Nav navigationItems={navigationItems} />
				</ul>
			</div>
			<div className="header-second-block">
				<span>{name}</span>
				<div className="header-second-block__dropdown-arrow">
					<DropdownArrow />
				</div>
			</div>
			<div className="header-mobile-menu-icon" onClick={() => toggleMobileMenu()}>
				<BurgerMenu items={3} />
			</div>
			<div className={`header-mobile-menu ${!isMobileMenuOpen ? 'header-mobile-menu--closed' : ''}`}>
				<div className="header-mobile-menu__wrapper">
					<div className="header-mobile-menu__top">
						<a href="/">Travel Quiz</a>
						<img src={closeMobileMenuIcon} onClick={() => toggleMobileMenu()} className="header-mobile-menu__close-button" />
					</div>
					<div className="header-mobile-menu__main">
						<ul className="header-mobile-menu__main__navigation-container">
							<Nav navigationItems={navigationItems} />
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;
