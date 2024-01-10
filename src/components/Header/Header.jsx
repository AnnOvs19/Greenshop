import React from 'react';

import headerLogo from "../../assets/icons/header-logo.svg";
import headerSearch from "../../assets/icons/header-search.svg";
import headerBasket from "../../assets/icons/header-basket.svg";

import "./header.scss";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='header'>
            <img src={headerLogo} alt="#" />
            <nav className='header__nav'>
                <ul>

                    <li>
                        <Link to={"/"}>Catalog</Link>
                    </li>
                    <li>Blogs</li>
                    <li>About as</li>
                </ul>
            </nav>
            <div className='header__user'>
                <img src={headerSearch} alt="#" />
                <Link to={"/basket"}>
                    <img src={headerBasket} alt="#" />
                </Link>
            </div>
        </header>
    );
};

export default Header;