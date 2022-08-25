import React from 'react';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CountUp from 'react-countup';
import { ShoppingCartOutlined } from '@mui/icons-material';

import './widget.scss';

const Widget = ({ type, amount, percentage }) => {
    const dataByType = {
        user: {
            title: 'USERS',
            isMoney: false,
            link: 'See All Users',
            icon: <PersonOutlineOutlinedIcon className="icon user-icon" />,
        },
        order: {
            title: 'ORDERS',
            isMoney: false,
            link: 'View All Orders',
            icon: <ShoppingCartOutlined className="icon order-icon" />,
        },
        earning: {
            title: 'EARNINGS',
            isMoney: true,
            link: 'View net Earnings',
            icon: <MonetizationOnOutlinedIcon className="icon earning-icon" />,
        },
        balance: {
            title: 'BALANCE',
            isMoney: true,
            link: 'See Details',
            icon: (
                <AccountBalanceWalletOutlinedIcon className="icon balance-icon" />
            ),
        },
    };

    const { title, isMoney, link, icon } = dataByType[type] || {};

    return (
        <div className="widget bounce">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">
                    <CountUp end={amount} prefix={isMoney ? '$' : ''} />
                </span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardDoubleArrowUpOutlinedIcon />
                    <CountUp end={percentage} suffix="% " />
                </div>
                {icon}
            </div>
        </div>
    );
};

export default Widget;
