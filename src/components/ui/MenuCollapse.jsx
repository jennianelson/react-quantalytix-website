import React from 'react';

const MenuCollapse = (props) => {
  return (
    <div className={props.className} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" {...props}>
    </div>
  )
}

export default MenuCollapse;