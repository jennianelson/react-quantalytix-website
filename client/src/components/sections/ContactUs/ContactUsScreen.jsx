import React, {Component} from 'react';
import PageTemplate from '../../widgets/PageTemplate';
import {MainContent, InternalContent} from '../../Wrappers';
import {Col, Image, Row} from '../../primitives';
import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate className="about-page">
      <MainContent>
        <InternalContent className="d-md-flex my-5">
          <Col className="col-md-6 px-md-5">
            <div className="contact-form">
              <h1 className="mb-1"><span className="center-inner-div">CONTACT US</span></h1>
              <h2 className="mb-4">OUTMANEUVER. OUTSMART. OUTPERFORM.</h2>
              <ContactUsForm />
            </div>
          </Col>
          <Col className="text-left col-md-6 pt-5">
            <div className="Aligner">
              <div className="Aligner-item">
              <Image className="about-logo" imageName="about-logo.svg" />
              </div>
            </div>
            <QContactsBlock/>
          </Col>
        </InternalContent>
        </MainContent>
    </PageTemplate>
    )
  }
}
