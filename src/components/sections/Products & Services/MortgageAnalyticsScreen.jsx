import React, {Component} from 'react';
import {Button, Image, Row, Col} from '../../primitives';
import FeaturesList from './FeaturesList';
import {mortgageAnalyticsFeatures} from './datasets'
import PageTemplate from '../../widgets/PageTemplate';
import { MainContent, InternalContent} from '../../Wrappers';

export default class MortgageAnalyticsScreen extends Component {
  render () {
    return (
      <PageTemplate className="mortgage-analytics-page">
        <MainContent className="mt-5">
          <h1 className="mb-4">MORTGAGE ANALYTICS</h1>
          <h2>Keeping you on course with your mission</h2>
          <InternalContent className="container px-xl-5 py-4">
            <Row>
              <Col className="col-md-6 text-left px-xl-5 py-3">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob ortis nisl</p>
                <p>Another paragraph of text</p>
                <p>Currently we offer the following:</p>
              </Col>
              <Col className="col-md-6">
                <Image imageName="mortgage-device-platform.png" />
              </Col>
            </Row>
            <Row>
              <Col className="col-md-6 pt-5 pr-xl-5">
                <Image imageName="mortgage-video-image-bg.png"/>
                <Button kind="primary" margins="md mt-3">Request demo</Button>
              </Col>
              <Col className="col-md-6 pt-xl-3">
                <FeaturesList className="market-data-list" featuresArray={mortgageAnalyticsFeatures}/>
              </Col>
            </Row>
            </InternalContent>
          </MainContent>
      </PageTemplate>
    )
  }
}