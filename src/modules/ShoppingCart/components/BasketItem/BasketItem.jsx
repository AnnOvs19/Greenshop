import React from 'react';

import "./basketItem.scss"

const BasketItem = ({ cardData }) => {
    return (
        <div key={cardData.id} className='basketItem'>
            <img src={cardData.image} alt="#" />
            <h3>{cardData.title}</h3>
            <p>${cardData.price.toFixed(2)}</p>
            <img src="" alt="#" />
        </div>
    );
};

export default BasketItem;