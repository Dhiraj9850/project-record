import React, {useState } from 'react'
import { useRef } from 'react';

const NewTask = ({ onAddTask }) => {
    const [enteredTask, setEnteredTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    const inputRef = useRef();
    const handleOnChange = (event) => {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            setErrorMessage('please enter a task');
            inputRef.current.focus();
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('')
        setErrorMessage('')
    }
    return (
        <>
         
            <div className="w-100">
                <div className=" flex justify-between items-center">
                    <input type="text" className="bg-stone-200 py-1 px-2 rounded-sm w-64 focus:outline-blue-500 me-4 my-3" onChange={handleOnChange} value={enteredTask} ref={inputRef}/>
                    <button onClick={handleClick}>Add</button>
                </div>
                <div>
                    {errorMessage &&<p className="text-red-600">{errorMessage}</p>}
                </div>
            </div>
        </>


    )
}

export default NewTask