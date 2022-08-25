import React from 'react';
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Widget from '../../components/widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';

import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <main className="home-container">
                <Navbar />
                <section className="widgets">
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
                </section>
                <section className="charts">
                    <Featured />
                    <Chart />
                </section>
            </main>
        </div>
    );
};

export default Home;
