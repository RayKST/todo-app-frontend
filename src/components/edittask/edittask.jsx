import '../home/home.css';
import instance from '../api/api';
import React, { useEffect, useState } from 'react';


function EditTask ({task})
{
    //[data, setData] = useState(task);
    console.log(task);



    return 
    (
    <div className="card-content">
        <h2 className="card-title">{task['Title']}</h2>
        <p className="card-description">{task['Description']}</p>
        <p className="card-start-date">{task['StartDate']}</p>
        <p className="card-end-date">{task['EndDate']}</p>
    </div>
       
    )
}



export default EditTask;