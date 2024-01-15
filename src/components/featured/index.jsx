import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Summary from './Summary';
import ProgressProvider from './ProgressProvider';
import './featured.scss';
import CountUp from 'react-countup';

const Featured = () => {
    return (
        <div className="featured bounce">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <ProgressProvider valueStart={10} valueEnd={70}>
                        {(value) => (
                            <CircularProgressbar
                                value={value}
                                text={`${value}%`}
                                strokeWidth={4}
                                styles={buildStyles({
                                    pathColor: '#00962d',
                                    textColor: '#009360',
                                    trailColor: '#d6d6d6',
                                })}
                            />
                        )}
                    </ProgressProvider>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">
                    <CountUp end={420} prefix=" $" />
                </p>
                <p className="desc">
                    Previous transactions processing, Last payments may not be
                    included
                </p>
                <div className="summary">
                    <Summary isPositive title="Target" amount="13.4" />
                    <Summary isPositive title="Last Week" amount="6.4" />
                    <Summary title="Last Month" amount="1.4" />
                </div>
            </div>
        </div>
    );
};

export default Featured;
