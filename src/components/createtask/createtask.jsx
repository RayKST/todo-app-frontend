import '../utils/taskdefaultform.css';
import React, { useEffect, useState } from 'react';
import TaskCalls from '../api/taskcalls';

function CreateTask() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const taskCallsInstance = new TaskCalls();


    async function createTask(event) {

        const formData = new FormData(event.target);
        const taskData = {};

        formData.forEach((value, key) => {
            taskData[key] = value;
        });

        try {
            console.log(taskData)
            alert('teste')
            const response = await taskCallsInstance.CreateTask(taskData, setError);
            console.log(response); 
        } catch (err) {
            console.error('Create failed:', err);
        }
    }

    return (
    <div className="form-container">
        <form className="task-form" onSubmit={createTask}>
            <h2>Criar Tarefa</h2>
            <input name="Title" placeholder='Título' required />
            <input name="Description" placeholder='Descrição' required />
            <input name="StartDate" type="date" placeholder='Início da tarefa' required />
            <input name="EndDate" type="date" placeholder='Final da tarefa' required />
            <button type="submit" className="submit-button">Criar</button>
        </form>
    </div>
    );
}

export default CreateTask;
