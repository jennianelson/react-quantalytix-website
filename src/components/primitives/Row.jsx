import React from 'react';

const Row = ({className, children}) => (<div className={className}>{children}</div>)

Row.defaultProps = {
  className: "row"
}
export default Row;