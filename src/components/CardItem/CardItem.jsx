import React from 'react';
import BaseButton from '../../ui/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../modules/ShoppingCart/store/basketSlise';

import "./cardItem.scss";



const CardItem = ({ cardData }) => {
    const dispatch = useDispatch();

    return (
        <div key={cardData.id} className='card-item'>
            <img src={cardData.image} alt="#" />
            <h3>{cardData.title}</h3>
            <p>${cardData.price.toFixed(2)}</p>
            <BaseButton styles={"card-item__button"} onClick={() => { dispatch(addProduct(cardData)) }} >Add to Basket</BaseButton>
        </div>
    );
};

export default CardItem;