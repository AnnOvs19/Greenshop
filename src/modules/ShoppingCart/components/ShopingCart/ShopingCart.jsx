import React, { useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';

import "./shopingCart.scss"
import ModalLayout from '../../../../ui/ModalLayout/ModalLayout';
import BaseButton from '../../../../ui/BaseButton/BaseButton';


const ShopingCart = ({ basket }) => {
    const [modalActive, setModalActive] = useState(false);
    let totalPrice = 0;

    if (Array.isArray(basket) && basket.length == 0) {
        return (
            <div className='shopingCart'>
                <h6>There are no items in the cart</h6>
            </div>
        )
    }

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
                            totalPrice += product.price
                            return (
                                <BasketItem cardData={product} />
                            )
                        })}
                    </tbody>
                </table>
                <div className=''>
                    <BaseButton styles={"shopingCart__basket-btn"} onClick={() => setModalActive(true)} >Pay for the order</BaseButton>
                </div>

            </div>

            <ModalLayout active={modalActive} setActive={setModalActive}>
                <form className="shopingCart__modal">
                    <div className="shopingCart__modal-head">
                        <h4>Cart Totals</h4>
                    </div>
                    <div className="shopingCart__modal-body">
                        <div className='cupone'>
                            <div>
                                <input type="text" placeholder='Enter coupon code here...' />
                            </div>
                            <BaseButton styles={"cupone__btn"}>Apply</BaseButton>
                        </div>
                        <div className="order-item">
                            <span>Subtotal</span>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="order-item">
                            <span>Coupon Discount</span>
                            <p>${(120).toFixed(2)}</p>
                        </div>
                        <div className="order-item">
                            <span>Shiping</span>
                            <p>${(55).toFixed(2)}</p>
                        </div>
                        <div className="order-item">
                            <p>Total</p>
                            <h3>${(totalPrice - 120 + 55).toFixed(2)}</h3>
                        </div>
                        <BaseButton styles={"modal__btn"}>Pay for the order</BaseButton>
                    </div>
                </form>
            </ModalLayout>
        </div >
    );
};

export default ShopingCart;