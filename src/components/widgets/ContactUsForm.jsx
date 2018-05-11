import React, {Component} from 'react';
import {Button, Image, TextField} from '../primitives';

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
              <Image imageName="user.svg"/>
            </div>
          </div>
          <TextField type="text" placeholder="Username"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Image imageName="email.svg" />
            </div>
          </div>
          <TextField type="email" placeholder="Email"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Image imageName="phone.svg" />
            </div>
          </div>
          <TextField type="text" placeholder="Phone"/>
        </div>

        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <Image imageName="company.svg" />
            </div>
          </div>
          <TextField type="text" placeholder="Company Name"/>
        </div>

        <div className="input-group mb-4">
          <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">GET STARTED. CONTACT US!</Button>
        </div>
      </form>
    )
  }
}