import React from 'react';
import Marketing from '../Marketing/Marketing';
import CardItem from '../../../../components/CardItem/CardItem';

import "./catalog.scss";
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/catalogSlice';


const Catalog = (props) => {
    const products = useSelector(getProducts);
    return (
        <div className='catalog'>
            <Marketing />
            <div className='catalog__products'>
                {products?.map((product) => {
                    return (
                        <CardItem cardData={product} />
                    )
                })}
            </div>
        </div>
    );
};

export default Catalog;