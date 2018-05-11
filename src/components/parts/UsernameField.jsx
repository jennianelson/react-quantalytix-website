import React from 'react';
import { Image, TextField } from '../primitives';

const UsernameField = (props) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Image imageName="user.svg"/>
        </div>
      </div>
      <TextField type="text" placeholder="Username"/>
    </div>
  )
}

export default UsernameField;