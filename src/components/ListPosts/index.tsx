import React from 'react';
import './style.scss';
import { List, DataList } from './api';

const ListPosts = () => {
    return (
        <div className="list-port">
            <div>
                <h4>Popular Posts</h4>
            </div>
            <ul>
                {List.map((list: DataList) => (
                    <li key={list.id}>
                        <img alt="list-img" src={list.avt}></img>
                        <div>
                            <p>{list.name}</p>
                            <span>{list.post}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListPosts;
