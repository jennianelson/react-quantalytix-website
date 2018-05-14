import React from 'react';
import {Image} from '../primitives'
import {SocialMediaBar} from '../widgets';
import { Copyright, GoDaddy } from '../ui';

const Footer = ({}) => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialMediaBar />
        <div className="d-flex justify-content-center align-items-center flex-column">
            <Copyright />
            <GoDaddy />
        </div>
      </div>
    </footer>
  )
}

export default Footer;