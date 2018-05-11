import React, {Component} from 'react';
import {Image} from '../primitives';

export default class QContactsBlock extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="contacts-right-block">
          <span className="contacts-right-block-logo d-none d-md-block"><a href=""><Image imageName="contact-logo.svg"/></a></span>
          <span className="link"><a href="tel:123456789"><strong><Image imageName="phone-contact-info.svg"/></strong>123 456 789</a></span>
          <span className="link"><a href="mailto:Loremipsum@infor.com"><strong><Image imageName="email-contact-info.svg"/></strong>Loremipsum@infor.com</a></span>
          <span className="link"><strong><Image imageName="address-contact-info.svg"/></strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magni sunt tenetur tempora a</span></span>

          <div className="contacts-right-block-bottom">
            <button type="submit" className="btn btn-rounded btn-blue lg mt-5">LEARN MORE</button>
          </div>
        </div> 
      </div>
    )
  }
}