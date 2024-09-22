import './home.css';
import instance from '../api/api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMyContext } from '../context';

function Home() {
    const { setContext } = useMyContext();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    let navigate = useNavigate(); 

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get('/api/task');
                setData(response.data);
            } catch (err) {
                setError(err);
            }
        };

        getData();
    }, []);
    
    function handleEditTask(task) 
    {
        setContext(task);
        navigate('/edit-task');
    }
    
    if (error) return <div>Error: {error.message}</div>;

    
    if (!data || !data.tasks) {
        return <div>Loading...</div>;
    }

    const tasksCards = data.tasks.map((task, index) => (
        <div className="card" key={index}>
            <div className="card-content">
                <h2 className="card-title">{task['Title']}</h2>
                <p className="card-description">{task['Description']}</p>
                <p className="card-start-date">{task['StartDate']}</p>
                <p className="card-end-date">{task['EndDate']}</p>          
                <button className='card-button' onClick={() => handleEditTask({task})}>Editar tarefa</button>              
            </div>
        </div>
    ));

    return (
        <div className="cards">
            {tasksCards}
        </div>
    );
}

export default Home;
