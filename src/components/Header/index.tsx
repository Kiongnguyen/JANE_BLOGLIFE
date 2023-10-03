import React from 'react';
import './style.scss';
import image from '../../assets/img/slideShow.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <h1>JANE BLOGLIFE</h1>
                <h6>
                    Welcome to the blog of{'  '}
                    <span> Jane's world</span>
                </h6>
            </div>
            <div className="header-slideshow">
                <img src={image} alt="fashion blog" />
                <div className="title-slideshow">
                    <h2>Jane's</h2>
                    <h1>
                        <b className="hide-on-mobile">FASHION BLOG</b>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
