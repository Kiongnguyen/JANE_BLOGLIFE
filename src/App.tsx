import React from 'react';
import './App.scss';
import image from './assets/img/slideShow.jpg';
import Navigation from './components/Navigation';
import Subsribe from './components/Subsribe';
import Card from './components/Card';
import Pagination from './components/Pagination';
import ToTheTop from './components/ToTheTop';
import Foodter from './components/Footer';
import './components/GlobalStyles/reposive.scss';
import MyName from './components/MyName';
import ListPosts from './components/ListPosts';

function App() {
    return (
        <div className="App" id="header">
            <Navigation />
            <Subsribe />
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

            <div className="grid wide">
                <div className="row sm-gutter container">
                    <div className="col l-8 m-12 c-12 cards">
                        <Card />
                    </div>
                    <div className="col l-4 m-12 c-12 card-sub">
                        <MyName />
                        <ListPosts />
                        <div className="card-ad">Advertise</div>
                        <div className="card-tags"> Tags </div>
                        <div className="card-ins">Inspiration</div>
                        <div className="card-follow"> Follow Me</div>
                        <div className="card-subsc">Subscribe</div>
                    </div>
                </div>
            </div>

            <Pagination />
            <ToTheTop />
            <Foodter />
        </div>
    );
}

export default App;
