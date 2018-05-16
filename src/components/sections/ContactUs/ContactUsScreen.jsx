import React, {Component} from 'react';
import {Footer} from '../../ui';
import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';
import {MainContent} from '../../Wrappers';
import PageTemplate from '../../widgets/PageTemplate';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate pageWrapper="about-page">
      <MainContent>
        <div className="d-md-flex">
          <ContactUsForm />
          <QContactsBlock />
        </div>
        <Footer />
      </MainContent>
    </PageTemplate>
    )
  }
}
