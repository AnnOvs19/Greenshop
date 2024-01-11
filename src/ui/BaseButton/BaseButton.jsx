import React from 'react';

import "./baseButton.scss";

const BaseButton = ({ styles, children, ...props }) => {
    return (
        <button className={styles ? `${styles} base-btn` : "base-btn"} {...props} >
            {children}
        </button>
    );
};

export default BaseButton;