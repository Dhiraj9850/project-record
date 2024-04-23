import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

const Newproject = ({onAdd,onCancel}) => {
 
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  const modal = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDuedate = duedate.current.value;


    if(enteredTitle.trim()===''||enteredDesc.trim()===''||enteredDuedate.trim()===''){
         modal.current.open();
         return;
    }

     onAdd({
       title:enteredTitle,
       description:enteredDesc,
       duedate:enteredDuedate
     })
  }

  return (
    <>
    <Modal ref={modal} buttoncaption="Okay">

         <h2 className="text-red-500 font-semibold text-xl mb-2">Invalid Fields</h2>
         <p className="text-slate-800 text-center my-5">OOPS...! Looks like you forgot to enter a value!</p>
      
     </Modal>
    <div className="w-[35rem] mt-16">
      <div>
        <Input type="text" ref={title} label="title" />
        <Input  ref={description} label="description" textarea />
        <Input type="date" ref={duedate} label="due date" />
      </div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-500 hover:text-stone-800" onClick={onCancel}>Cancel</button>
        </li>
        <li>
          <button className="bg-stone-800 px-6 py-2 text-slate-50 rounded-md hover:bg-stone-950" onClick={handleSave}>Save</button>
        </li>
      </menu>
    </div>
    </>
    

  )
}

export default Newproject