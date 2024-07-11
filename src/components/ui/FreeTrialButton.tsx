
import React from 'react'
import './style.css'

const FreeTrialButton = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default FreeTrialButton