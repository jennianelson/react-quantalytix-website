import React, {Component} from 'react';
import PageTemplate from '../../widgets/PageTemplate';
import {MainContent, InternalContent} from '../../Wrappers';
import {Col, Image} from '../../primitives';
import ContactUsForm from './ContactUsForm';
import QContactsBlock from './QContactsBlock';

export default class ContactUsScreen extends Component {
  render() {
    return ( 
    <PageTemplate className="about-page">
      <MainContent className="mt-5 ml-5">
      <Col className="col-md-9">
              <Image className="about-logo" imageName="about-logo.svg" />
              <hgroup className="py-4">
                <h1>Contact Us</h1>
              </hgroup>
     
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
