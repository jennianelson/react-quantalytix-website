import React, {Component} from 'react';
import PageTemplate from '../../widgets/PageTemplate';
import {MainContent, InternalContent} from '../../Wrappers';
import {Col} from '../../primitives';
import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate className="about-page">
      <MainContent className="mt-5 ml-5">
        <InternalContent className="d-md-flex">
          <Col className="col-md-6 px-md-0">
            <div className="contact-form">
              <h1 className="mb-1"><span className="center-inner-div">CONTACT US</span></h1>
              <h2 className="mb-4">OUTMANEUVER. OUTSMART. OUTPERFORM.</h2>
              <ContactUsForm />
            </div>
          </Col>
          <QContactsBlock />
        </InternalContent>
      </MainContent>
    </PageTemplate>
    )
  }
}
