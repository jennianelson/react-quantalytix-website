import React, {Component} from 'react';
import {Button} from '../../primitives';
import { InputGroup, Alert } from '../../parts';

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: { firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '' },
      submitted: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      contactInfo: {
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.contactInfo
    fetch('http://localhost:5000/api/contact', {
      body: JSON.stringify(data),
      headers: {'content-type': 'application/json'},
      method: 'POST'
      }).then(res => res.json())
      .then(json => console.log(json));
    
    this.setState({
      contactInfo: { firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '' },
      submitted: true
    });
  }

  closeAlert(event) {
    // debugger
    if (event !== undefined) {this.setState({
      ...this.state, submitted: false
    })} 
  }

  render() {
    return (
      <div>
         {this.state.submitted ? <Alert handleClick={(event) => this.closeAlert(event)} type="success">Thanks! You'll be hearing from us soon.</Alert> : null}
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <InputGroup handleChange={this.handleChange} name="firstName" value={this.state.contactInfo.firstName} placeholder="First Name" icon="user.svg" />
        <InputGroup handleChange={this.handleChange} name="lastName" value={this.state.contactInfo.lastName} placeholder="Last Name" icon="user.svg" />
        <InputGroup type="email" handleChange={this.handleChange} name="email" value={this.state.contactInfo.email} placeholder="Email" icon="email.svg" />
        <InputGroup handleChange={this.handleChange} name="phoneNumber" value={this.state.contactInfo.phoneNumber} placeholder="Phone Number" icon="phone.svg" />
        <InputGroup handleChange={this.handleChange} name="company" value={this.state.contactInfo.company} placeholder="Company" icon="company.svg" />
       
        <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">CONTACT US!</Button>
      </form>
      </div>
    )
  }
}