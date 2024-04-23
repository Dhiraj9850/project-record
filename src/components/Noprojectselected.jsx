import React from 'react'
import noteimg from '../assets/notepen.png'
import Button from './Button'

const Noprojectselected = ({onStartaddProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
        <img src={noteimg} className="w-13 h-14 mx-auto object-contain" alt="" />
        <h2 className="text-xl text-stone-700 font-bold my-4">No project selected</h2>
        <p className="my-5 font-semibold text-stone-600">Select a new project or start with a new project</p>
        <p>
            <Button onClick={onStartaddProject}>Create new project</Button>
        </p>
    </div>
  )
}

export default Noprojectselected