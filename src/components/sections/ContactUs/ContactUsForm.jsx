import React, {Component} from 'react';
import {Button} from '../../primitives';
import { InputGroup } from '../../parts';

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: ''
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //remove this later
    alert(`Thanks, ${this.state.firstName}!`);
    //
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: ''
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <InputGroup handleChange={this.handleChange} name="firstName" value={this.state.firstName} placeholder="First Name" icon="user.svg" />
        <InputGroup handleChange={this.handleChange} name="lastName" value={this.state.lastName} placeholder="Last Name" icon="user.svg" />
        <InputGroup type="email" handleChange={this.handleChange} name="email" value={this.state.email} placeholder="Email" icon="email.svg" />
        <InputGroup handleChange={this.handleChange} name="phone" value={this.state.phone} placeholder="Phone Number" icon="phone.svg" />
        <InputGroup handleChange={this.handleChange} name="company" value={this.state.company} placeholder="Company" icon="company.svg" />
        <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">CONTACT US!</Button>
      </form>
    )
  }
}