import React from 'react';
import './style.scss';

interface IProps {
    visible: boolean,
}

const Footer = (props: IProps) => {
    const { visible } = props;
    return (
        <footer className={`footer ${visible ? 'footer--hidden' : ''}`}>
            <p className="footer__text">Have a nice trip!</p>
        </footer>
    )
}

export default Footer;
