import React from 'react';
import Marketing from '../Marketing/Marketing';
import products from "../../store/products.json";
import CardItem from '../../../../components/CardItem/CardItem';

import "./catalog.scss";


const Catalog = (props) => {
    return (
        <div className='catalog'>
            <Marketing />
            <div className='catalog__products'>
                {products.map((product) => {
                    return (
                        <CardItem cardData={product} />
                    )
                })}
            </div>
        </div>
    );
};

export default Catalog;