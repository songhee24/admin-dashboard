import React from 'react';
import Icon from '@mui/material/Icon';

const MenuItem = ({ title, text, icon }) => {
    const titlePersist = title && <p className="title">{title}</p>;
    return (
        <>
            {titlePersist}
            <li>
                <Icon className="icon" component={icon} />
                <span>{text}</span>
            </li>
        </>
    );
};

export default MenuItem;
