import React from 'react';
import {SocialMediaLink} from '../parts';

const SocialMediaBar = () => {
  return (
    <ul className="socials">
      <SocialMediaLink url="https://twitter.com/quantalytix" iconName="icon-tw"/>
      {/* <SocialMediaLink url="" iconName="icon-fb"/> */}
      <SocialMediaLink url="https://www.linkedin.com/company/quantalytix/" iconName="icon-ln"/>
      <SocialMediaLink url="https://www.instagram.com/quantalytix/" iconName="icon-ig"/>
    </ul>
  )
}

export default SocialMediaBar;