//import useState from 'react';
import './home.css';
import instance from '../api/api';
import React, { useEffect, useState } from 'react';

function Home ()
{
    const [data, setData] = useState(null);
    instance.get('/api/task')
    .then(function (response) {
        setData(response.data);
    })
    .catch(function (error) {
        console.log(error);
        return (error)
    });

    return (
        <div>
            <h1>Data from Backend:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}



export default Home