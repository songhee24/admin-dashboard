import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Widget from '../../components/widget';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    <Widget
                        type="user"
                        title="USERS"
                        countInfo="343"
                        link="See all User"
                        percentage="20"
                    />
                    <Widget
                        type="order"
                        title="USERS"
                        countInfo="343"
                        link="See all User"
                        percentage="20"
                    />
                    <Widget
                        type="erarning"
                        title="USERS"
                        countInfo="343"
                        link="See all User"
                        percentage="20"
                    />
                    <Widget
                        type="balance"
                        title="USERS"
                        countInfo="343"
                        link="See all User"
                        percentage="20"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
