import '../utils/taskdefaultform.css';
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserCalls from '../api/usercalls';

function CreateLogin() {
    const [error, setError] = useState(null);
    const UserCallsInstance = new UserCalls();
    const navigate = useNavigate();

    const loginRef = useRef();
    const passwordRef = useRef();

    async function createLogin() {
        
        const loginData = {
            Login: loginRef.current.value,
            Password: passwordRef.current.value,
        };

        try {
            const response = UserCallsInstance.CreateUser(loginData, setError);
            navigate('/');
        } catch (err) {
            console.error('Create failed:', err);
            navigate('/create-login');
        }
    }

    return (
    <div className="form-container">
        <form className="task-form">
            <h2>Criar Login</h2>
            <input ref={loginRef} placeholder='Login' required />
            <input ref={passwordRef} placeholder='Senha' type='password' required />
            <button type="button" className="submit-button" onClick={createLogin}>Criar</button>
        </form>
    </div>
    );
}

export default CreateLogin;
