import React, {Component} from 'react';
import {Button} from '../../primitives';
import { InputGroup, Alert } from '../../parts';

export default class ContactUsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        firstname: '',
        lastname: '',
        email: '',
        company: '' 
      },
      submitted: false,
      error: false
    };
  }

  handleChange = (event) => {
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

  async createContact() {
    let {firstname, lastname, company, email} = this.state.contact
    let response = await fetch('http://localhost:3001/api/contacts', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        contact: {
          first_name: firstname,
          last_name: lastname,
          company: company,
          email: email
        }
      }),
    })
    try {
      let contact = await response.json()
      return contact
    } catch (error) {
      console.log(error)
      return { error: error }
    } 
  }

  async handleSubmit(event) {
    event.preventDefault();
    let result = await this.createContact()
    //reset state
    this.setState({
      contact: { 
        firstname: '',
        lastname: '',
        email: '',
        company: '' 
      },
      submitted: true,
      error: result.error ? result.error : false
    });
  }

  closeAlert(event) {
    if (event !== undefined) {this.setState({
      ...this.state, submitted: false
    })} 
  }

  render() {
    const {firstname, lastname, company, email} = this.state.contact
    return (
      <div>
         {this.state.submitted ? <Alert handleClick={(event) => this.closeAlert(event)} type="success">Thanks! You'll be hearing from us soon.</Alert> : null}
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <InputGroup handleChange={this.handleChange} name="firstname" value={firstname} placeholder="First Name" icon="user.svg" />
        <InputGroup handleChange={this.handleChange} name="lastname" value={lastname} placeholder="Last Name" icon="user.svg" />
        <InputGroup type="email" handleChange={this.handleChange} name="email" value={email} placeholder="Email" icon="email.svg" />
        {/* <InputGroup handleChange={this.handleChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" icon="phone.svg" /> */}
        <InputGroup handleChange={this.handleChange} name="company" value={company} placeholder="Company" icon="company.svg" />
        <Button type="submit" kind="primary" size="lg" margins="w-100 mt-5">CONTACT US!</Button>
      </form>
      </div>
    )
  }
}