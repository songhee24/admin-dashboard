import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <Navbar />
                Home container
            </div>
        </div>
    );
};

export default Home;
