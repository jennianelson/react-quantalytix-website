import React from 'react';

const TextField = ({handleChange, name, value, type, placeholder, required}) => {
  return (
    <input onChange={handleChange} type={type} value={value} name={name} className="form-control" placeholder={placeholder} required></input>
  )
}

TextField.defaultProps = {
  required: true
}
export default TextField;