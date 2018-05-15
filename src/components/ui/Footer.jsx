import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import { Copyright, GoDaddy } from '../ui';

import '../../styles/layouts/_footer.scss';

const Footer = () => {
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