import '../home/home.css';
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
        <form onSubmit={updateTask}>
            <input name="Title" placeholder={task['Title']} />
            <input name="Description" placeholder={task['Description']} />
            <input name="StartDate" placeholder={task['StartDate']} />
            <input name="EndDate" placeholder={task['EndDate']} />
            <button type="submit">Modificar</button>
        </form>
    );
}

export default EditTask;
