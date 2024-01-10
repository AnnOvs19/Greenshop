import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import "./basket.scss";

const Basket = (props) => {
    return (
        <div>
            <Header />
            <p style={{ marginTop: 300 }}>basket</p>
            <Footer />
        </div>
    );
};

export default Basket;