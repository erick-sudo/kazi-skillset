import React, {useEffect, useState} from 'react';

function Tasks() {

    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get the user Id
    

    // Fetch data using the user Id
    fetch(`/tasks`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const tasks = data
        setTasks(tasks);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);

    return (
        <div className='h-96 bg-sky-400'>
            <h1>Tasks</h1>
            <div>
                {tasks.map((task) => (
                <div className="col-md-2" key={task.id}>
                
                    <h2 style={{fontSize:'18px', paddingTop:"10px",}}>{task.location}</h2>
                    <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{task.description}</p>
                    <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{task.start_date}</p>
                    <p style={{fontSize:'12px', paddingTop:"10px",}} className="card-text">{task.location}</p>
                    <div style={{alignItems:'inline',}}>
                        <button>Accept</button>
                        <button>Decline</button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Tasks;