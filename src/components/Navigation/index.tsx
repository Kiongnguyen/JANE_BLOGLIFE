import React, { useState } from 'react';
import './style.scss';

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);
    return (
        <div className="navigation">
            <div className="sosial-media">
                <div
                    className="sosial-media-icon 
                     hide-on-PC hide-on-tablet"
                    onClick={() => {
                        setCheck(!check);
                        !show || setCheck(!show);
                    }}
                >
                    <i className="fa-solid fa-link"></i>
                </div>
                <div
                    className={`sosial-media-form ${
                        !check ? 'hidden' : 'active-check'
                    }`}
                >
                    <a href="/facebook" className="link">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/tiktok" className="link">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="/twitter" className="link">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/youtube" className="link">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                {/* mobile */}
                <div
                    className={` ${!check ? 'hidden' : 'sosial-media-mobile'}`}
                >
                    <a href="/facebook" className="link">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/tiktok" className="link">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="/twitter" className="link">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/youtube" className="link">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
            <div className="search">
                <div
                    className={`icon-search ${show ? 'hidden' : 'active'}`}
                    onClick={() => {
                        setShow(!show);
                        !check || setCheck(!check);
                    }}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={`form-search ${!show ? 'hidden' : 'active'}`}>
                    <input placeholder=" Search  to the blog"></input>
                    <button
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
