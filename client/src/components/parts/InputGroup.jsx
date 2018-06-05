import React from 'react';
import { TextField, Image } from '../primitives';

const InputGroup = ({handleChange, name, value, type, placeholder, icon}) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Image imageName={icon}/>
        </div>
      </div>
      <TextField handleChange={handleChange} name={name} value={value} type={type} placeholder={placeholder}/>
    </div>
  )
}

InputGroup.defaultProps = {
  type: "text"
}

export default InputGroup;