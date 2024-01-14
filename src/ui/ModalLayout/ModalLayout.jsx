import React from 'react';

import "./modalLayout.scss"

const ModalLayout = ({ children, active, setActive, ...props }) => {
    return (
        <div className={active ? "modalLayout activeModal" : "modalLayout"} onClick={() => setActive(false)}>
            <div className="modalLayout__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalLayout;