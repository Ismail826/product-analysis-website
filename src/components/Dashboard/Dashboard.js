import React, { useEffect, useState } from 'react';
import { AreaChart, Area, BarChart, PieChart,Pie, Line, Legend, LineChart, CartesianGrid, Bar, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className="grid grid-cols-2 border-8 my-10 mx-10 gap-10">
            <div><h5 className="my-4 text-indigo-700 text-3xl">Month with Sell</h5>
                <div className="">
                    <LineChart width={350} height={250} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>

            </div>

            <div className=''>
                <h1 className="my-4 text-indigo-700 text-3xl">Investment VS Revenue</h1>
                <div>
                    <AreaChart width={350} height={250} data={data} margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />

                    </AreaChart>
                </div>

            </div>
            <div>
                <h1 className="my-4 text-indigo-700 text-3xl">Investment VS Revenue</h1>

                <div>

                    <BarChart
                        width={350}
                        height={250}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
            <div>
                <h1 className="my-4 text-indigo-700 text-3xl">Investment VS Revenue</h1>

                <div>
                    <PieChart width={350} height={250}>
                        <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;