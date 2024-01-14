import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

import "./shopingCart.scss"


const ShopingCart = ({ basket }) => {
    return (
        <div className='shopingCart'>
            <div className='shopingCart__basket'>
                <table>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(basket) && basket.map((product) => {
                            return (
                                <BasketItem cardData={product} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShopingCart;