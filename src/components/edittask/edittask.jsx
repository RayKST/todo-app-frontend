import '../utils/taskdefaultform.css';
import Cookies from 'universal-cookie';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TaskCalls from '../api/taskcalls';

function EditTask() {

    const cookie = new Cookies();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const taskID = new URLSearchParams(location.search).get('taskID');
    const taskCallsInstance = new TaskCalls();
    const statusData = cookie.get('statusData');

    useEffect(() => {
        taskCallsInstance.GetTask(setData, setError, taskID);
    }, [taskID]);

    if (error) return <div>Error: {error.message}</div>;

    if (!data || !data.tasks) {
        return <div>Loading...</div>;
    }

    const task = data.tasks[0];
    var selectStatus;

    async function updateTask(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const formData = new FormData(event.target);
        const taskData = {};
        taskData['ID'] = taskID;
        taskData['Status'] = selectStatus;
        formData.forEach((value, key) => {
            console.log(value)
            taskData[key] = value;
        });
        
        try {
            const response = await taskCallsInstance.UpdateTask(taskData, setError);
            console.log(response); 
        } catch (err) {
            console.error('Update failed:', err);
        }
    }

    function setUserChoice (event) {
        selectStatus = event.target.value;
    }

    return (
    <div className="form-container">
        <form className="task-form" onSubmit={updateTask}>
            <h2>Editar Tarefa</h2>
            <input name="Title" placeholder={task['Title']} required />
            <input name="Description" placeholder={task['Description']} required />
            <input name="StartDate" type="date" placeholder={task['StartDate']} required />
            <input name="EndDate" type="date" placeholder={task['EndDate']} required />
            <select onChange={setUserChoice}> 
                {statusData.todo_status.map((status, index) => (
                    <option value={status.ID}>{status.Description}</option>
                ))}
            </select>    
            <button type="submit" className="submit-button">Modificar</button>
        </form>
    </div>
    );
}

export default EditTask;
