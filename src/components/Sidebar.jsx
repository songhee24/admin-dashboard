import React from 'react';
import './sidebar.scss';
import { MENU_ITEMS } from '../utils/constants/general';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="logo">Songhee24 Admin</div>
            </div>
            <div className="center">
                <ul>
                    {MENU_ITEMS.map((item) => (
                        <li key={item.text}>
                            {item.icon}
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    );
};

export default Sidebar;
