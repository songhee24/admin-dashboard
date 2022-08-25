import React from 'react';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import './summary.scss';
import CountUp from 'react-countup';

const Summary = ({ title, amount, isPositive }) => {
    return (
        <div className="item">
            <div className="itemTitle">{title}</div>
            <div
                className={`itemResult ${isPositive ? 'positive' : 'negative'}`}
            >
                {isPositive ? (
                    <KeyboardControlKeyOutlinedIcon fontSize="small" />
                ) : (
                    <KeyboardArrowDownOutlinedIcon fontSize="small" />
                )}
                <div className="resultAmount">
                    <CountUp end={amount} prefix="$" suffix="k" />
                </div>
            </div>
        </div>
    );
};

export default Summary;
