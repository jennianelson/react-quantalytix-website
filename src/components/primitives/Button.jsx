import React from 'react';

import '../../styles/ui_components/_buttons.scss';

const generateClassName = (kind, size, margins) => {
  return `btn btn-rounded btn-${kind} ${size} ${margins}`
}

const Button = props => {
  return (
    <button 
      type={props.type}
      className={generateClassName(props.kind, props.size, props.margins)}
      {...props} 
    />
  )
}

Button.defaultProps = {
  type: "button",
  kind: "",
  size: "",
  margins: ""
}

export default Button