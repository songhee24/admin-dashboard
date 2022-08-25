import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './featured.scss';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        minValue={0.1}
                        value={70}
                        text={'70%'}
                        strokeWidth={4}
                    />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">420 $</p>
                <p className="desc">
                    Previous transactions processing, Last payments may not be
                    included
                </p>
            </div>
        </div>
    );
};

export default Featured;
