import React from 'react';
import './style.scss';

const Follow = () => {
    return (
        <div className="follow">
            <div className="follow-header">
                <h4>Follow Me</h4>
            </div>
            <div className="follow-list">
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
    );
};

export default Follow;
