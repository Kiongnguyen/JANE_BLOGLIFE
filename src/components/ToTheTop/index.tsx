import React, { useState, useEffect } from 'react';
import './style.scss';

const ToTheTop = () => {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScoroll = () => {
            setShowGoToTop(window.scrollY >= 500);
        };
        window.addEventListener('scroll', handleScoroll);
    }, []);
    return (
        <>
            {showGoToTop && (
                <button className="gototop">
                    <a href="#header">
                        <i className="fa-solid fa-arrow-up"></i>
                    </a>
                </button>
            )}
        </>
    );
};

export default ToTheTop;
