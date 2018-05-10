import React from 'react';

const generateClassName = (type, size, margins) => {
  return `btn btn-rounded btn-${type} ${size} ${margins}`
}

const Button = props => {
  return (
    <button 
      type="button" 
      className={generateClassName(props.type, props.size, props.margins)}
      {...props} 
    />
  )
}

Button.defaultProps = {
  type: "",
  size: "",
  margins: ""
}

export default Button