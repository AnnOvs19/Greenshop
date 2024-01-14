import React, { useState } from 'react';
import basketItemDelite from "../../../../assets/icons/basketItem-delite.svg";
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import { useDispatch } from 'react-redux';


import "./basketItem.scss"
import { deleteProduct } from '../../store/basketSlise';


const BasketItem = ({ cardData }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        setQuantity(quantity + 1)
    };

    function deleteQuantity() {
        if (quantity === 1) {
            dispatch(deleteProduct(cardData.id))
        } else {
            setQuantity(quantity - 1)
        }
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
                    <p>{quantity}</p>
                    <BaseButton styles={"basketItem__quantity"} onClick={addQuantity}>+</BaseButton>
                </div>
            </td>

            <td>
                <div>
                    <span>${(cardData.price * quantity).toFixed(2)}</span>
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