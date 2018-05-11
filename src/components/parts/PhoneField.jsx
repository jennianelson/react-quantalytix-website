import React from 'react';
import { Image, TextField } from '../primitives';

const PhoneField = (props) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Image imageName="phone.svg" />
        </div>
      </div>
      <TextField type="text" placeholder="Phone"/>
    </div>
  )
}

export default PhoneField;