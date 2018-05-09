import React from 'react';

const generateClassName = (type) => {
  debugger
  let css = 'btn btn-rounded '
  switch(type) {
    case "primary":
      css += 'btn-primary';
      break;
    case "secondary":
      css += 'btn-secondary';
      break;
    default:
      css += 'btn-primary';
  }
  return css;
}

const Button = props => {
  return (
    <button 
      type="button" 
      className={generateClassName(props.type)}
      {...props} 
    />
  )
}

export default Button