import React from 'react'

const Button = ({children,...props}) => {
  return (
    <button className="px-3 py-2 text-xs md:text-base bg-stone-600 text-slate-50 rounded-md hover:bg-stone-700"{...props}>{children}</button>
  )
}

export default Button