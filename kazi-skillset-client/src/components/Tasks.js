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
        <div className=''>
            <h1 className='p-4'>Search, filter, and pick tasks from clients</h1>

            <div className='flex items-center'>
              <div className='title absolute text-[2em] font-bold right-10'>KaziSkillset</div>
              <img className='' src="https://cdn.pixabay.com/photo/2018/03/11/09/09/time-3216244_960_720.jpg" alt="Tasks" />
            </div>

            <div className="w-3/4 my-5 mx-auto flex p-2 shadow rounded-md bg-white shadow-black">
              <input className='flex-grow outline-none p-2' type="text" placeholder="Search here..." />
              <button className="button bg-blue-400 px-4 py-2 rounded-md">Search</button>
            </div>

            <div className='grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {tasks.slice(0,8).map((task) => (
                <div className="max-w-lg shadow shadow-black m-3 p-4 bg-sky-100" key={task.id}>
                    <h2>{task.location}</h2>
                    <p className="card-text">{task.description}</p>
                    <p className="card-text">{task.start_date}</p>
                    <div className='flex p-3 font-bold gap-4'>
                        <button className='text-white bg-green-500 px-3 py-2 rounded-md'>Accept</button>
                        <button className='text-white bg-green-700 px-3 py-2 rounded-md'>Decline</button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Tasks;