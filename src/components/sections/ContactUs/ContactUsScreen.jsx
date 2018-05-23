import React, {Component} from 'react';
import PageTemplate from '../../widgets/PageTemplate';
import {MainContent, InternalContent} from '../../Wrappers';
import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate className="about-page">
      <MainContent>
        <InternalContent className="d-md-flex">
          <ContactUsForm />
          <QContactsBlock />
        </InternalContent>
      </MainContent>
    </PageTemplate>
    )
  }
}
