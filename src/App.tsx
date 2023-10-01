import React from 'react';
import './App.scss';
import './assets/style/grid.scss';
import image from './assets/img/slideShow.jpg';
import Navigation from './components/Navigation';
import './components/GlobalStyles/reposive.scss';

function App() {
    return (
        <div className="grid App">
            <Navigation />
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
                        <div className="sub-model">SUBSCRIBE</div>
                    </div>
                </div>
            </div>
            <div className="container">
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

            <div className="Footer">Powered by w3.css</div>
        </div>
    );
}

export default App;
