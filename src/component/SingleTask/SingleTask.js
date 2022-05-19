import React from 'react';

const SingleTask = ({ task, userTask, setUserTask }) => {
    const handleDelete = id => {
        console.log('Deleting', id);
        const url = `https://morning-fjord-12583.herokuapp.com/task/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    const remaining = userTask.filter(task => task._id !== id);
                    setUserTask(remaining);
                }
            })
    }
    return (
        <div>
            <h3>'{task.name}'</h3>
            <p>{task.task}</p>
            <button onClick={() => handleDelete(task._id)} className='btn btn-danger'>Delete</button>
            <hr />
        </div>
    );
};

export default SingleTask;