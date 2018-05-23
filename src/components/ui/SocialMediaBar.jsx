import React from 'react';
import {SocialMediaLink} from '../parts';

const SocialMediaBar = () => {
  return (
    <ul className="socials">
      <SocialMediaLink company="linkedin"/>
      {/* <SocialMediaLink company="facebook"/> */}
      <SocialMediaLink company="instagram"/>
      <SocialMediaLink company="twitter"/>
    </ul>
  )
}

export default SocialMediaBar;