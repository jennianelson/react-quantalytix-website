import React from 'react';

const Link = (props) => (
  <a href={props.href} className={props.className}{...props}></a>
);

export default Link;