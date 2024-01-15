import React from 'react';
import Icon from '@mui/material/Icon';

const MenuItem = ({ icon, title, notificationCount, messageCount }) => {
    let countInfo;

    if (notificationCount || messageCount) {
        countInfo = (
            <div className="counter">{notificationCount || messageCount}</div>
        );
    }

    return (
        <div className="item">
            <Icon className="icon" component={icon} />
            {countInfo}
            {title}
        </div>
    );
};

export default MenuItem;
