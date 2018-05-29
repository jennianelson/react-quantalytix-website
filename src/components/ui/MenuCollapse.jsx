import React from 'react';

const MenuCollapse = ({className, children}) => {

  return (
    <span className={className} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
     {children}
    </span>
  )
}

export default MenuCollapse;