import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import "./basket.scss";
import ShopingCart from '../../modules/ShoppingCart/components/ShopingCart/ShopingCart';
import { useSelector } from 'react-redux';
import { getBasketProducts } from '../../modules/ShoppingCart/store/basketSlise';

const Basket = (props) => {
    const basketProducts = useSelector(getBasketProducts); //getBasketProducts возвращает массив корзины
    return (
        <div>
            <Header />
            <ShopingCart basket={basketProducts} />
            <Footer />
        </div>
    );
};

export default Basket;