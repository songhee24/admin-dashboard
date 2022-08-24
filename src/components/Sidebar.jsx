import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="logo">Songhee24 Admin</div>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span>Dashboard </span>
                    </li>
                    <li>
                        <span>Dashboard </span>
                    </li>
                    <li>
                        <span>Dashboard </span>
                    </li>
                    <li>
                        <span>Dashboard </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    );
};

export default Sidebar;
