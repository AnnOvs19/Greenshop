import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

import "./shopingCart.scss"


const ShopingCart = ({ basket }) => {
    return (
        <div className='shopingCart'>
            {Array.isArray(basket) && basket.map((product) => {
                return (
                    <BasketItem cardData={product} />
                )
            })}
        </div>
    );
};

export default ShopingCart;