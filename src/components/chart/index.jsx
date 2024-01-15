import React from 'react';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './chart.scss';

const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 23100 },
    { name: 'March', Total: 24200 },
    { name: 'April', Total: 3100 },
    { name: 'May', Total: 13200 },
    { name: 'June', Total: 1200 },
];

const Chart = () => {
    return (
        <div className="chart bounce">
            <h1 className="title">Last 6 Months (Revenue)</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart
                    width={900}
                    height={250}
                    data={data}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke={'#a4a4a4'} />
                    {/* for showing info from left side <YAxis />*/}
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#Total)"
                    />
                    {/* second background lines*/}
                    {/*<Area*/}
                    {/*    type="monotone"*/}
                    {/*    dataKey="pv"*/}
                    {/*    stroke="#82ca9d"*/}
                    {/*    fillOpacity={1}*/}
                    {/*    fill="url(#colorPv)"*/}
                    {/*/>*/}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
