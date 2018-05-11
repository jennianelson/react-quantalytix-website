import React from 'react';
import { Image, TextField } from '../primitives';

const CompanyField = (props) => {
  return (
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <Image imageName="company.svg" />
        </div>
      </div>
      <TextField type="text" placeholder="Company Name"/>
    </div>
  )
}

export default CompanyField;