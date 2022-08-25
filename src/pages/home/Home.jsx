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
                        title="USERS"
                        countInfo="343"
                        link="See all User"
                        percentage="20%"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
