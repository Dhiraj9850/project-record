import { forwardRef } from 'react'

const Input = forwardRef(function Input({ textarea, label, ...props },ref){

  const classes = 'w-full p-1 border-2 rounded-sm border-stone-300 focus:border-stone-400 focus:outline-none';
  return (
    <div>
      <p className="flex flex-col gap-2 my-5">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea className={classes} {...props} ref={ref} /> : 
        <input className={classes} {...props} ref={ref} />}
      </p>
    </div>
  )
})


export default Input;