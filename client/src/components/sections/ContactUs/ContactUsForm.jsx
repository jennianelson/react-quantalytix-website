import React, {Component} from 'react';
import {Button} from '../../primitives';
import { InputGroup, Alert } from '../../parts';

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        company: '' 
      },
      submitted: false,
      error: false
    };
  }

  handleChange = (event) => {
    // debugger
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      contact: {
        ...this.state.contact,
        [name]: value
      }
    });
  }

  async createContact(contact) {
    let response = await fetch('/api/contacts', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(contact),
    })
    try {
      let contact = await response.json()
      return contact
    } catch (error) {
      console.log(error)
      return { error: error }
    } 
  }

  handleSubmit(event) {
    event.preventDefault();
    const contact = this.state.contact
    let result = this.createContact(contact)

    this.setState({
      contact: { 
        firstName: '',
        lastName: '',
        email: '',
        company: '' 
      },
      submitted: true,
      contact: result,
      error: result.error ? result.error : false
    });
  }

  closeAlert(event) {
    if (event !== undefined) {this.setState({
      ...this.state, submitted: false
    })} 
  }

  render() {
    const {firstName, lastName, company, email} = this.state.contact
    return (
      <div>
         {this.state.submitted ? <Alert handleClick={(event) => this.closeAlert(event)} type="success">Thanks! You'll be hearing from us soon.</Alert> : null}
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <InputGroup handleChange={this.handleChange} name="firstName" value={firstName} placeholder="First Name" icon="user.svg" />
        <InputGroup handleChange={this.handleChange} name="lastName" value={lastName} placeholder="Last Name" icon="user.svg" />
        <InputGroup type="email" handleChange={this.handleChange} name="email" value={email} placeholder="Email" icon="email.svg" />
        {/* <InputGroup handleChange={this.handleChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" icon="phone.svg" /> */}
        <InputGroup handleChange={this.handleChange} name="company" value={company} placeholder="Company" icon="company.svg" />
        <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">CONTACT US!</Button>
      </form>
      </div>
    )
  }
}