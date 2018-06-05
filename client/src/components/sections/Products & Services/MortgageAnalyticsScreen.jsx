import React, {Component} from 'react';
import {Button, Row, Col} from '../../primitives';
import FeaturesList from './FeaturesList';
import {mortgageAnalyticsFeatures} from './datasets'
import PageTemplate from '../../widgets/PageTemplate';
import { MainContent, InternalContent} from '../../Wrappers';
import { NavLink } from 'react-router-dom';

export default class MortgageAnalyticsScreen extends Component {
  render () {
    return (
      <PageTemplate className="mortgage-analytics-page">
        <MainContent className="mt-5">
          <h1 className="mb-4">MORTGAGE ANALYTICS</h1>
          <h2>Keeping you on course with your mission</h2>
          <InternalContent className="container px-xl-5 py-2">
            <Row className="row pb-4">
              <Col className="col-md-5 center-div justify pr-3">
                <p>In an age where data drives action, it becomes equally important that your data is sending the right message. While data may come in many different forms, sizes, and languages, it is critical that it all speaks to one another and in a way that is understandable to you.</p>
                <Col className="col-md-12 text-center py-3">
                  <h4>That’s where Quantalytix comes in.</h4>
                </Col>
                <p>From bringing disparate data sets together to building fully baked software applications, we configure data to speak in terms of your organization’s mission. As we bring raw, impersonal datasets into our platform, we turn them into live, meaningful relationships. These relationships allow you to better understand how your organization is performing.</p>
              </Col>
              <Col className="col-md-7">
                <FeaturesList className="market-data-list" featuresArray={mortgageAnalyticsFeatures}/>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-12 text-center px-xl-4">
               <h4>If you're ready to redefine the way your data works for you, let’s get started.</h4>
                <NavLink to="/contact-us">
                  <Button kind="primary" margins="md mt-4">Contact Us</Button>
                </NavLink>
              </Col>
            </Row>
            </InternalContent>
          </MainContent>
      </PageTemplate>
    )
  }
}