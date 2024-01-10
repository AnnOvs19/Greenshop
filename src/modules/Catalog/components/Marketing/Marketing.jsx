import React from 'react';
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import MarketingLily from "../../../../assets/images/marketing-lily.png";

import "./marketing.scss";


const Marketing = (props) => {
    return (
        <div className='marketing'>
            <div className='marketing__content'>
                <span>Welcome to GreenShop</span>
                <h1>Let’s Make a Better Planet</h1>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <BaseButton>SHOP NOW</BaseButton>
            </div>

            <img src={MarketingLily} alt="#" />
        </div>
    );
};

export default Marketing;