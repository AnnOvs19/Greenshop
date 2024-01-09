import React from 'react';

import headerLogo from "../../assets/icons/header-logo.svg";
import headerSearch from "../../assets/icons/header-search.svg";
import headerBasket from "../../assets/icons/header-basket.svg";

import "./header.scss";

const Header = (props) => {
    return (
        <header className='header'>
            <img src={headerLogo} alt="#" />
            <nav className='header__nav'>
                <ul>
                    <li>Catalog</li>
                    <li>Blogs</li>
                    <li>About as</li>
                </ul>
            </nav>
            <div className='header__user'>
                <img src={headerSearch} alt="#" />
                <img src={headerBasket} alt="#" />
            </div>
        </header>
    );
};

export default Header;