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
                        amount="343"
                        link="See all User"
                        percentage="88"
                    />
                    <Widget
                        type="order"
                        title="USERS"
                        amount="343"
                        link="See all User"
                        percentage="22"
                    />
                    <Widget
                        type="earning"
                        title="USERS"
                        amount="343"
                        link="See all User"
                        percentage="12"
                    />
                    <Widget
                        type="balance"
                        title="USERS"
                        amount="343"
                        link="See all User"
                        percentage="66"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
