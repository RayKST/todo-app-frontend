import './home.css';
import instance from '../api/api';
import React, { useEffect, useState } from 'react';

function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await instance.get('/api/task');
                console.log(response);
                setData(response.data);
            } catch (err) {
                console.log(err);
                setError(err);
            }
        };

        getData();
    }, []);

    if (error) return <div>Error: {error.message}</div>;

    // Adicione uma verificação para garantir que 'data' e 'data.tasks' existem
    if (!data || !data.tasks) {
        return <div>Loading...</div>; // Ou um indicador de carregamento
    }

    const tasksCards = data.tasks.map((task, index) => (
        <div className="card" key={index}>
            <div className="card-content">
                <h2 className="card-title">{task['Title']}</h2>
                <p className="card-description">{task['Description']}</p>
                <p className="card-start-date">{task['StartDate']}</p>
                <p className="card-end-date">{task['EndDate']}</p>
                <button className='card-button'>Editar tarefa</button>
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
