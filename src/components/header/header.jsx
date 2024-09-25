import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './header.css'; // Arquivo CSS para o Header

function Header() {

    const navigate = useNavigate();

    function handleCreateTask() 
    {
        navigate('/create-task');
    }

    return (
        <header className="app-header">
            <h1>Minhas Tarefas</h1>
            <div className="task-actions">
                <button className="action-button" onClick={handleCreateTask}>
                    <FontAwesomeIcon icon={faPlus} /> Adicionar Tarefa
                </button>
                <button className="action-button" onClick={handleCreateTask}>
                    <FontAwesomeIcon icon={faCheckCircle} /> Verificar Conta
                </button>
            </div>
        </header>
    );
}

export default Header;
