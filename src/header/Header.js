import React from 'react';
import headerImage from '../assets/images/header.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src="https://cdn-assets-legacy.casar.com/img/sdn/37/fundo-default.jpg" alt="Casamento" className="header-image" />
            <div className="header-text">
                <span>Sheywesk & Rita</span>
               
            </div>
        </header>
    );
}

export default Header;