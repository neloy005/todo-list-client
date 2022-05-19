import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleTask from '../SingleTask/SingleTask';
import './List.css';

const List = () => {
    const [userTask, setUserTask] = useState([]);

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://morning-fjord-12583.herokuapp.com/task/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setUserTask(data);
                })
        }
    }, [user])



    const createTask = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const task = event.target.task.value;
        const email = user.email;
        const isDone = false;
        const taskInfo = { name, task, email, isDone }
        console.log(name, task);
        fetch('https://morning-fjord-12583.herokuapp.com/taskinfo', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskInfo)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const allTask = [...userTask, taskInfo];
                setUserTask(allTask);
                event.target.reset();
            })

    }
    return (
        <div>
            <h2>Enter Your List</h2>
            <form className='task-form' onSubmit={createTask}>
                <input type="text" name='name' placeholder='Enter task name' required /> <br />
                <textarea type="email" name='task' placeholder='Enter task detail' required /> <br />
                <input className='submit-btn' type="submit" value='Add task' />
            </form>
            {
                userTask.map(task => <SingleTask
                    key={task._id}
                    task={task}
                    userTask={userTask}
                    setUserTask={setUserTask}
                ></SingleTask>)
            }
        </div>
    );
};

export default List;