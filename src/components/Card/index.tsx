import React, { useState } from 'react';
import './style.scss';
import { Cards, CardData } from './api';

const Card = () => {
    const [like, setlike] = useState(false);
    const [list, setList] = useState(false);
    return (
        <>
            {Cards.map((card: CardData) => (
                <div className="card" key={card.id}>
                    <div className="list-card">
                        <h3>TITLE HEADING</h3>
                        <h6>
                            Title description, <span>{card.date}</span>
                        </h6>
                        <img alt={`card${card.id}`} src={card.src}></img>
                        <p>{card.p1}</p>
                        <p>{card.p2}</p>
                        <div className="card-btn">
                            <button
                                className="btn-like"
                                onClick={() => {
                                    setlike(!like);
                                }}
                            >
                                <i
                                    className={`fa-solid ${
                                        like ? 'fa-thumbs-up' : 'fa-check'
                                    }`}
                                ></i>{' '}
                                Like
                            </button>
                            <button
                                className="btn-replies"
                                onClick={() => {
                                    setList(!list);
                                }}
                            >
                                <p>
                                    Replies <span>{card.id}</span>
                                </p>
                            </button>
                        </div>
                    </div>
                    {/* list comments */}
                    <div
                        className={`list-comments ${
                            list ? 'active' : 'hidden'
                        }`}
                    >
                        <ul>
                            {card.rep.map((com: any) => (
                                <li key={com.id}>
                                    <div>
                                        <img alt="avatar" src={com.avt}></img>
                                    </div>
                                    <div className="com-info">
                                        <h4>
                                            {com.name} <span> {com.date}</span>
                                        </h4>
                                        <p>{com.Com}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
