import '../utils/taskdefaultform.css';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserCalls from '../api/usercalls';




function Login(){

    const [error, setError] = useState(null);
    const userCallsInstance = new UserCalls();
    const navigate = useNavigate();

    const loginRef = useRef();
    const passwordRef = useRef();
    
    useEffect(() => {
        
    }, [])

    async function login() {
        
        const userData = {
            Login: loginRef.current.value,
            Password: passwordRef.current.value
        };

        try {
            await userCallsInstance.ValidateLogin(userData, setError).then(response => {
                if (response.status = 200)
                {
                        navigate('/');
                }
            });
            
        } catch (err) {
            console.error('Login failed:', err);
            navigate('/login');
        }
    }


    return (
        <div className="form-container">
            <form className="task-form">
                <h2>Login</h2>
                <input ref={loginRef} placeholder='Login' required />
                <input ref={passwordRef} type='password' placeholder='Password' required />
                <button type="button" className="submit-button" onClick={login}>Login</button>
            </form>
        </div>
    );
}


export default Login;