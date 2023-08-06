import React, { useEffect, useState } from 'react';




const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className="grid grid-cols-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    );
};

export default Dashboard;