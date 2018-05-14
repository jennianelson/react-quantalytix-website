import React from 'react';

import { UsernameField, EmailField, PhoneField, CompanyField} from '../parts';
import { TextField } from '../primitives';

const InputGroup = ({purpose}) => {
  switch (purpose) {
    case 'username':
      return <UsernameField />;
      // break;
    case 'email':
      return <EmailField />;
      // break;
    case 'company':
      return <CompanyField />;
      // break;
    case 'phone':
      return <PhoneField />;
      // break;
    default:
      return <TextField />;
  }
}

export default InputGroup;