import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import "./basket.scss";
import ShopingCart from '../../modules/ShoppingCart/components/ShopingCart/ShopingCart';

const Basket = (props) => {
    return (
        <div>
            <Header />
            <ShopingCart />
            <Footer />
        </div>
    );
};

export default Basket;