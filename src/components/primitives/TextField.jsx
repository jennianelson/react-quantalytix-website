import React from 'react';

const TextField = ({type, placeholder}) => {
  return (
    <input type={type} className="form-control" placeholder={placeholder}></input>
  )
}

export default TextField;