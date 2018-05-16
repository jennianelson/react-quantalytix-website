import React from 'react';

// const generateClassName = (kind, size, margins) => {
//   return `btn btn-rounded btn-${kind} ${size} ${margins}`
// }

const Button = ({type, kind, size, margins, children}) => {
  // debugger
  return (
    <button 
      type={type}
      className={`btn btn-rounded btn-${kind} ${size} ${margins}`}> 
      {children}
      </button>
  )
}

Button.defaultProps = {
  type: "button",
  kind: "",
  size: "",
  margins: ""
}

export default Button