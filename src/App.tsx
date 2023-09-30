import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="navigation">NAVIGATION</div>
            <div className="header">
                <div className="header-title">
                    <h1>JANE BLOGLIFE</h1>
                    <h6>
                        Welcome to the blog of
                        <span>Jane's world</span>
                    </h6>
                </div>
                <div className="header-slideshow">
                    <img></img>
                    <h1>Jane's</h1>
                    <h1>
                        <b>FASHION BLOG</b>
                    </h1>
                    <div className="sub-model">Sub</div>
                </div>
            </div>
            <div className="container">
                <div className="grid">
                    <div className="cards">
                        <div className="card1">card1</div>
                        <div className="card2">card2</div>
                        <div className="card3">card3</div>
                    </div>
                    <div className="card-sub">
                        <div className="card-name">My Name</div>
                        <div className="list-port">Popular Posts </div>
                        <div className="card-ad">Advertise</div>
                        <div className="card-tags"> Tags </div>
                        <div className="card-ins">Inspiration</div>
                        <div className="card-follow"> Follow Me</div>
                        <div className="card-subsc">Subscribe</div>
                    </div>
                </div>
                <div className="pagination">Pagination</div>
                <div className="tag-to-the-top"> To the top</div>
            </div>
            <div className="Footer">Powered by w3.css</div>
        </div>
    );
}

export default App;
