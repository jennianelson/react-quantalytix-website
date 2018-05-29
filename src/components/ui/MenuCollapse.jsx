import React from 'react';

const MenuCollapse = (props) => {
  return (
    <span className={props.className} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" {...props}>
    </span>
  )
}

export default MenuCollapse;