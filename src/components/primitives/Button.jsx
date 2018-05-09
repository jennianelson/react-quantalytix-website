import React from 'react';

const generateType = (type) => {
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

const generateClassName = (type, others) => {
  const classType = generateType(type)
  return (others === null ? classType : classType + " " + others)
}

const Button = props => {
  return (
    <button 
      type="button" 
      className={generateClassName(props.type, props.others)}
      {...props} 
    />
  )
}

export default Button