import React from 'react';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './widget.scss';

const Widget = ({ title, countInfo, link, percentage }) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{countInfo}</span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardDoubleArrowUpOutlinedIcon /> {percentage}
                </div>
                <PersonOutlineOutlinedIcon className="icon" />
            </div>
        </div>
    );
};

export default Widget;
