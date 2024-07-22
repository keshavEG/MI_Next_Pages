
import React from 'react'
import "./style.module.css"

const FreeTrialButton = ({ onClick, children }) => {
  return (
    <button className="justify-center px-6 py-3 text-sm font-bold leading-4 text-white uppercase rounded-md bg-stone-500" onClick={onClick}>
      {children}
    </button>
  )
}

export default FreeTrialButton