import './home.css';
import TaskCalls from '../api/taskcalls'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
//import { useMyContext } from '../context';

function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        new TaskCalls().GetTask(setData, setError);
    }, []);
    
    function handleEditTask(task) 
    {
        navigate(`/edit-task?taskID=${task.task['ID']}`);
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
