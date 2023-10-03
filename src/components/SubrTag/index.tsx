import React from 'react';
import './style.scss';

const SubrTag = () => {
    return (
        <div className="subrTag">
            <div className="subrTag-header">
                <h4>Subsribe</h4>
            </div>
            <div className="subrTag-list">
                <p>
                    Enter your e-mail below and get notified on the latest blog
                    posts.
                </p>
                <input type="email" placeholder="Enter e-mail"></input>
                <button>Subsribe</button>
            </div>
        </div>
    );
};

export default SubrTag;
