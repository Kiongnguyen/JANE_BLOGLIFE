import React from 'react';
import './App.scss';
//Header
import Navigation from './components/Navigation';
import Subsribe from './components/Subsribe';
import Header from './components/Header';
//Container
import Card from './components/Card';
import MyName from './components/MyName';
import ListPosts from './components/ListPosts';
import Advertise from './components/Advertise';
import Tags from './components/Tags';
import Inspiration from './components/Inspirantion';
import Follow from './components/Follow';
import SubrTag from './components/SubrTag';
//Footer
import Pagination from './components/Pagination';
import ToTheTop from './components/ToTheTop';
import Foodter from './components/Footer';

function App() {
    return (
        <div className="App" id="header">
            <Navigation />
            <Subsribe />
            <Header />

            <div className="grid wide">
                <div className="row sm-gutter container">
                    <div className="col l-8 m-12 c-12 cards">
                        <Card />
                    </div>
                    <div className="col l-4 m-12 c-12 card-sub">
                        <MyName />
                        <ListPosts />
                        <Advertise />
                        <Tags />
                        <Inspiration />
                        <Follow />
                        <SubrTag />
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
