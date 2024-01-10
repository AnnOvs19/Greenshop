import React from 'react';

import footerLogo from "../../assets/icons/footer-logo.svg";
import footerLoc from "../../assets/icons/footer-loc.svg";
import footerMessage from "../../assets/icons/footer-message.svg";
import footerCall from "../../assets/icons/footer-call.svg"

import "./footer.scss";

const Footer = (props) => {
    return (
        <footer className='footer'>
            <img src={footerLogo} alt="#" />

            <div className='footer__item'>
                <img src={footerLoc} alt="#" />
                <span>70 West Buckingham Ave.
                    Farmingdale, NY 11735</span>
            </div>

            <div className='footer__item'>
                <img src={footerMessage} alt="#" />
                <span>contact@greenshop.com</span>
            </div>

            <div className='footer__item'>
                <img src={footerCall} alt="#" />
                <span>+88 01911 717 490</span>
            </div>
        </footer>
    );
};

export default Footer;