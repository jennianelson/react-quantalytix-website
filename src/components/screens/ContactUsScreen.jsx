import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import {Sidebar, Header, Footer} from '../ui';
import {ContactUsForm, QContactsBlock} from '../widgets'

export default class ContactUsScreen extends Component {
  render() {
    return (
      <div className="container-fluid about-page">
        <Sidebar></Sidebar>
				<div className="main-container">
					<Header></Header>
					<main className="main">
            <div className="main-content">
              <div className="d-md-flex">
                <ContactUsForm />
                <QContactsBlock />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}