import './edittask.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TaskCalls from '../api/taskcalls';

function EditTask() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const taskID = new URLSearchParams(location.search).get('taskID');
    const taskCallsInstance = new TaskCalls();

    useEffect(() => {
        taskCallsInstance.GetTask(setData, setError, taskID);
    }, [taskID]);

    if (error) return <div>Error: {error.message}</div>;

    if (!data || !data.tasks) {
        return <div>Loading...</div>;
    }

    const task = data.tasks[0];

    async function updateTask(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const formData = new FormData(event.target);
        const taskData = {};
        taskData['ID'] = taskID;
        formData.forEach((value, key) => {
            taskData[key] = value;
        });

        try {
            const response = await taskCallsInstance.UpdateTask(taskData, setError);
            console.log(response); 
        } catch (err) {
            console.error('Update failed:', err);
        }
    }

    return (
    <div className="form-container">
        <form className="edit-task-form" onSubmit={updateTask}>
            <h2>Editar Tarefa</h2>
            <input name="Title" placeholder={task['Title']} required />
            <input name="Description" placeholder={task['Description']} required />
            <input name="StartDate" type="date" placeholder={task['StartDate']} required />
            <input name="EndDate" type="date" placeholder={task['EndDate']} required />
            <button type="submit" className="submit-button">Modificar</button>
        </form>
    </div>
    );
}

export default EditTask;
