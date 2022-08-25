import React from 'react';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './widget.scss';
import CountUp from 'react-countup';

const Widget = ({ type, title, countInfo, link, percentage }) => {
    return (
        <div className="widget bounce">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">
                    <CountUp end={countInfo} />
                </span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardDoubleArrowUpOutlinedIcon />{' '}
                    <CountUp end={percentage} suffix={'%'} />
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
            </div>
        </div>
    );
};

export default Widget;
