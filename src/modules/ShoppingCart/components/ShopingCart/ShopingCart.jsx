import React from 'react';
import { useSelector } from 'react-redux';
import { getBasketProducts } from '../../store/basketSlise';

const ShopingCart = (props) => {
    const basket = useSelector(getBasketProducts);
    return (
        <div>

        </div>
    );
};

export default ShopingCart;