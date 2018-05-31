import React, {Component} from 'react';
import {Image} from '../../primitives';

export default class QContactsBlock extends Component {
  render() {
    return (
      <div className="Aligner">
        <div className="Aligner-item">
          {/* <span className="contacts-right-block-logo d-none d-md-block"><a href=""><Image imageName="contact-logo.svg"/></a></span> */}
          <span className="link"><a href="tel:123456789"><strong><Image imageName="phone-contact-info.svg"/></strong>205 573 0440</a></span>
          <span className="link"><a href="mailto:info@quantalytix.com"><strong><Image imageName="email-contact-info.svg"/></strong>info@quantalytix.com</a></span>
          <span className="link"><strong><Image imageName="address-contact-info.svg"/></strong><span>1500 1st Ave N, Birmingham, AL 35203</span></span>
        </div>
      </div>
    )
  }
}