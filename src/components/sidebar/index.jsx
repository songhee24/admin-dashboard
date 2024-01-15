import React from 'react';

import './sidebar.scss';
import { SIDEBAR_ITEMS } from '../../utils/constants/general';
import MenuItem from './MenuItem';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="logo">Songhee24 Admin</div>
            </div>
            <div className="center">
                <ul>
                    {SIDEBAR_ITEMS.map((item) => (
                        <MenuItem
                            key={item.text}
                            title={item.title}
                            text={item.text}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option"></div>
                <div className="color-option"></div>
            </div>
        </div>
    );
};

export default Sidebar;
