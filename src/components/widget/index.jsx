import React from 'react';
import './widget.scss';

const Widget = ({ title, countInfo }) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{countInfo}</span>
                <span className="title">{countInfo}</span>
            </div>
            <div className="right">right</div>
        </div>
    );
};

export default Widget;
