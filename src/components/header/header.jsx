import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './header.css'; // Arquivo CSS para o Header

function Header({ onAddTask, onVerifyAccount }) {
    return (
        <header className="app-header">
            <h1>Minhas Tarefas</h1>
            <div className="task-actions">
                <button className="action-button" onClick={onAddTask}>
                    <FontAwesomeIcon icon={faPlus} /> Adicionar Tarefa
                </button>
                <button className="action-button" onClick={onVerifyAccount}>
                    <FontAwesomeIcon icon={faCheckCircle} /> Verificar Conta
                </button>
            </div>
        </header>
    );
}

export default Header;
