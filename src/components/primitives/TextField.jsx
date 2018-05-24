import React from 'react';

const TextField = ({handleChange, name, value, type, placeholder}) => {
  return (
    <input onChange={handleChange} type={type} value={value} name={name} className="form-control" placeholder={placeholder}></input>
  )
}

export default TextField;