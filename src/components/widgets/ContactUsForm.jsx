import React, {Component} from 'react';
import {Button} from '../primitives';
import { InputGroup } from '../parts';

export default class ContactUsForm extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="col-md-6 px-md-0">
        <div className="contact-form">
          <h1 className="text-left mb-1"><span>CONTACT US</span></h1>
          <h2 className="text-left mb-4 pb-3">OUTMANEUVER. OUTSMART. OUTPERFORM.</h2>
          <form action="#">
            <InputGroup purpose="username" />
            <InputGroup purpose="email" />
            <InputGroup purpose="phone" />
            <InputGroup purpose="company" />
            <div className="input-group mb-4">
              <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">GET STARTED. CONTACT US!</Button>
            </div>
          </form>
    
        </div>
        {/* <!-- contact-form --> */}
      </div>
    )
  }
}