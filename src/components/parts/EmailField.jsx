import React from 'react';
import { Image, TextField } from '../primitives';

const EmailField = (props) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Image imageName="email.svg" />
        </div>
      </div>
      <TextField type="email" placeholder="Email"/>
    </div>
  )
}

export default EmailField;