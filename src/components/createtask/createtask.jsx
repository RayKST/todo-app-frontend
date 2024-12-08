import '../utils/taskdefaultform.css';
import Cookies from 'universal-cookie';
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TaskCalls from '../api/taskcalls';

function CreateTask() {
    const cookie = new Cookies();
    const [error, setError] = useState(null);
    const taskCallsInstance = new TaskCalls();
    const navigate = useNavigate();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();

    async function createTask() {
        
        const taskData = {
            Title: titleRef.current.value,
            Description: descriptionRef.current.value,
            OwnerID: cookie.get('loggedUser'),
            StartDate: startDateRef.current.value,
            EndDate: endDateRef.current.value,
        };

        try {
            const response = taskCallsInstance.CreateTask(taskData, setError);
            navigate('/');
        } catch (err) {
            console.error('Create failed:', err);
            navigate('/create-task');
        }
    }

    return (
    <div className="form-container">
        <form className="task-form">
            <h2>Criar Tarefa</h2>
            <input ref={titleRef} placeholder='Título' required />
            <input ref={descriptionRef} placeholder='Descrição' required />
            <input ref={startDateRef} type="date" required />
            <input ref={endDateRef} type="date" required />
            <button type="button" className="submit-button" onClick={createTask}>Criar</button>
        </form>
    </div>
    );
}

export default CreateTask;
