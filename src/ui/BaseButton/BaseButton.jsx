import React from 'react';

import "./baseButton.scss";

const BaseButton = ({ styles, children }) => {
    return (
        <button className={styles ? `${styles} base-btn` : "base-btn"}>
            {children}
        </button>
    );
};

export default BaseButton;