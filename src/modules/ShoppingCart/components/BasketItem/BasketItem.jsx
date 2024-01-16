import React, { useState } from 'react';
import basketItemDelite from "../../../../assets/icons/basketItem-delite.svg";
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import { useDispatch, useSelector } from 'react-redux';


import "./basketItem.scss"
import { addCount, deleteProduct, getTotalPrice, removeCount } from '../../store/basketSlise';


const BasketItem = ({ cardData }) => {
    const dispatch = useDispatch();

    function addQuantity() {
        dispatch(addCount(cardData.id))
    };



    function deleteQuantity() {
        dispatch(removeCount(cardData.id))
    }

    return (
        <tr key={cardData.id} className='basketItem'>
            <td>
                <img src={cardData.image} alt="#" />
                <h3>{cardData.title}</h3>
            </td>
            <td>
                <div>
                    <p>${cardData.price.toFixed(2)}</p>
                </div>
            </td>

            <td>
                <div>
                    <BaseButton styles={"basketItem__quantity"} onClick={deleteQuantity}>-</BaseButton>
                    <p>{cardData.quantity}</p>
                    <BaseButton styles={"basketItem__quantity"} onClick={addQuantity}>+</BaseButton>
                </div>
            </td>

            <td>
                <div>
                    <span>${(cardData.price * cardData.quantity).toFixed(2)}</span>
                </div>
            </td>

            <td>
                <div>
                    <img src={basketItemDelite} alt="#" onClick={() => {
                        dispatch(deleteProduct(cardData.id))
                    }} />
                </div>
            </td>
        </tr>
    );
};

export default BasketItem;