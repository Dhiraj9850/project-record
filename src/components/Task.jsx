import React from 'react'
import NewTask from './NewTask'


const Task = ({ onAddTask, tasks,onDeleteTask }) => {
  return (
    <>
      <div className='w-64 px-2 py-3'>
        <div className="flex content-between items-center">
          <h2 className="text-2xl font-sans font-bold">Tasks</h2>
        </div>
        <NewTask onAddTask={onAddTask} />
        {tasks.length === 0 && <p className="mt-3 font-semibold text-stone-500">No task added for this project</p
        >}

        {tasks.length >0 && <ul className="p-2 mt-3 bg-yellow-50">
          {tasks.map((task)=>{
            return(
                <li key={task.id} className="flex justify-between my-3"> <span>{task.text}</span> 
                <button className='text-stone-900 hover:text-red-600' onClick={()=>onDeleteTask(task.id)}>Clear</button>
                </li>
           
            )
          })}
        </ul>}

      </div>

    </>
  )
}

export default Task