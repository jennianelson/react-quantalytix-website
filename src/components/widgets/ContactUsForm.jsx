import React, {Component} from 'react';
import {Button, Image} from '../primitives';

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form action="#">
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {/* <img src="images/svg/contact us/user.svg" className="img-fluid" alt=""/> */}
              <Image imageName="user.svg"/>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Username"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {/* <img src="images/svg/contact us/Email.svg" className="img-fluid" alt=""/> */}
              <Image imageName="email.svg" />
            </div>
          </div>
          <input type="email" className="form-control" placeholder="Email"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {/* <img src="images/svg/contact us/phone.svg" className="img-fluid" alt=""/> */}
              <Image imageName="phone.svg" />
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Phone"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {/* <img src="images/svg/contact us/company.svg" className="img-fluid" alt=""/> */}
              <Image imageName="company.svg" />
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Companyname"/>
        </div>

        <div className="input-group mb-4">
          <button type="submit" className="btn btn-rounded btn-primary lg w-100 mt-5">GET STARTED. CONTACT US!
          </button>
        </div>
      </form>
    )
  }
}