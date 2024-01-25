import React from 'react';

import headerLogo from "../../assets/icons/header-logo.svg";
import headerSearch from "../../assets/icons/header-search.svg";
import headerBasket from "../../assets/icons/header-basket.svg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasketProducts } from '../../modules/ShoppingCart/store/basketSlise';

import "./header.scss";


const Header = (props) => {

    const basket = useSelector(getBasketProducts)

    return (
        <header className='header'>
            <Link to={"/"}><img src={headerLogo} alt="#" /></Link>
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
                    <p className='header__user-count'>{basket.length}</p>
                </Link>
            </div>
        </header>
    );
};

export default Header;