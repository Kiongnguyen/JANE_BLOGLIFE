import React, { useState } from 'react';
import './style.scss';

const Subsribe = () => {
    const [close, setClose] = useState(true);

    return (
        <div className="subscribe">
            <div className={`overlay ${close ? 'hidden' : 'active-sub'}`}></div>

            <div className={`model-sub ${close ? 'hidden' : 'active-sub'}`}>
                <h1>SUBSCRIBE</h1>
                <p>
                    Join my mailing list to receive updates on the latest blog
                    posts and other things.
                </p>
                <input type="email" placeholder="Enter e-mail"></input>
                <button
                    onClick={() => {
                        setClose(!close);
                    }}
                >
                    {' '}
                    Subscribe
                </button>
                <button
                    className="close "
                    onClick={() => {
                        setClose(!close);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div
                className="btn-sub"
                onClick={() => {
                    setClose(!close);
                }}
            >
                SUBSCRIBE
            </div>
        </div>
    );
};

export default Subsribe;
