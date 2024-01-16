import React, { useState } from 'react';
import BaseButton from '../../ui/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../modules/ShoppingCart/store/basketSlise';

import "./cardItem.scss";



const CardItem = ({ cardData }) => {
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(false)
    const [textBtn, setTextBtn] = useState("Add to Basket")

    function addProductBasket() {
        dispatch(addProduct(cardData));
        setDisable(true);
        setTextBtn("Аdded to cart")
    }


    return (
        <div key={cardData.id} className='cardItem'>
            <img src={cardData.image} alt="#" />
            <h3>{cardData.title}</h3>
            <p>${cardData.price.toFixed(2)}</p>
            <BaseButton styles={disable ? "cardItem__button disable" : "cardItem__button"} onClick={addProductBasket} disabled={disable}>{textBtn}</BaseButton>
        </div>
    );
};

export default CardItem;