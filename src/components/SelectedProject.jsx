import React from 'react'
import Task from './Task'

const SelectedProject = ({project,onDelete,onAddTask,tasks,onDeleteTask}) => {

    const formatedDate = new Date(project.duedate).toLocaleDateString("en-IN", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-[35rem] mt-16">
            <header className="border-b-2  pb-4 border-stone-400 mb-3">
                <div className="flex justify-between align-items-center border-stone-500">
                <h1 className="text-stone-600 text-3xl font-bold font-sans">{project.title}</h1>
                <button className="bg-slate-900  text-white px-4 py-2" onClick={onDelete}>Delete</button>

                </div>
                <div className="mt-3">
                    <p className="my-4 text-stone-500">{formatedDate}</p>
                    <p className="text-stone-600">{project.description}</p>
                </div>
            </header>
           <Task onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask}/>


        </div>
    )
}

export default SelectedProject