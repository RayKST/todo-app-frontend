import './home.css';
import Cookies from 'universal-cookie';
import TaskCalls from '../api/taskcalls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import StatusCalls from '../api/statuscalls';
//import { useMyContext } from '../context';

function Home() {
    const cookie = new Cookies();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const taskCallsInstance = new TaskCalls();
    new StatusCalls().GetStatus(cookie, setError);
    
    useEffect(() => {
        taskCallsInstance.GetTask(setData, setError, null, cookie.get('loggedUser'));
    }, []);
    
    function handleEditTask(task) 
    {
        navigate(`/edit-task?taskID=${task.task['ID']}`);
    }

    async function handleDeleteTask(task) 
    {
        const response = await taskCallsInstance.DeleteTask(setError, task['ID']);
        console.log(response);
    }
    
    if (error) return <div>Error: {error.message}</div>;

    
    if (!data || !data.tasks) {
        return <div>Loading...</div>;
    }
    
    const statusData = cookie.get('statusData');
    const tasksCards = data.tasks.map((task, index) => (
        <div className="card" key={index}>
            <div className="card-content">
                <button className='card-delete-button' onClick={() => handleDeleteTask(task)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <h2 className="card-title">{task['Title']}</h2>
                <p className="card-description">{task['Description']}</p>
                <p className="card-start-date">{task['StartDate']}</p>
                <p className="card-end-date">{task['EndDate']}</p>
                <p className="card-status">Card Status: {statusData.todo_status[task['StatusID']-1].Description}</p>
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
