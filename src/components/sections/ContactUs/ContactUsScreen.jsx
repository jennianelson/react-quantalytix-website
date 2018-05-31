import React, {Component} from 'react';
import PageTemplate from '../../widgets/PageTemplate';
import {MainContent} from '../../Wrappers';
import {Col, Image} from '../../primitives';
// import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate className="about-page">
      <MainContent>
        <Image className="about-logo" imageName="about-logo.svg" />
        <hgroup className="py-4">
          <h1>Contact Us</h1>
        </hgroup>
        
        <Col className="col-md-12 text-left pb-5">
        <QContactsBlock/>
        </Col>
        {/* <InternalContent className="d-md-flex"> */}
          {/* <Col className="col-md-6 px-md-0">
            <div className="contact-form">
              <h1 className="mb-1"><span className="center-inner-div">CONTACT US</span></h1>
              <h2 className="mb-4">OUTMANEUVER. OUTSMART. OUTPERFORM.</h2>
              <ContactUsForm />
            </div>
          </Col> */}
        {/* </InternalContent> */}
        </MainContent>
    </PageTemplate>
    )
  }
}
