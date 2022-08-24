import React from 'react';

import './sidebar.scss';
import { MENU_ITEMS } from '../../utils/constants/general';
import MenuItem from './MenuItem';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="logo">Songhee24 Admin</div>
            </div>
            <div className="center">
                <ul>
                    {MENU_ITEMS.map((item) => (
                        <MenuItem
                            key={item.text}
                            title={item.title}
                            text={item.text}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    );
};

export default Sidebar;
