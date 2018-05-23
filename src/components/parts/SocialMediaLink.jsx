import React from 'react';

const SocialMediaLink = ({url, iconName}) => {
  return (
    <li className="socials-item"><a href={url} target="blank"><i className={iconName}></i></a></li>
  )
}

export default SocialMediaLink;