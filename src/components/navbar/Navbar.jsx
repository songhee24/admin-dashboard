import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NAVBAR_ITEMS } from '../../utils/constants/general';
import MenuItem from './MenuItem';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    {NAVBAR_ITEMS.map((item) => (
                        <MenuItem
                            key={Math.random()}
                            icon={item.icon}
                            title={item.title}
                            notificationCount={item.notificationCount}
                            messageCount={item.messageCount}
                        />
                    ))}
                    <div className="item">
                        <img
                            src="https://avatars.githubusercontent.com/u/44497623?v=4"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
