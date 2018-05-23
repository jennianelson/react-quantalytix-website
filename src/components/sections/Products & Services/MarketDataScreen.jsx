import React, {Component} from 'react';
import {Button, Image, Row, Col} from '../../primitives';
import PricingSection  from './PricingSection';
import FeaturesList from './FeaturesList';
import {Video} from '../../parts';
import {marketDataFeatures} from './datasets';
import PageTemplate from '../../widgets/PageTemplate';
import { MainContent, InternalContent } from '../../Wrappers';

export default class MarketDataScreen extends Component {
  render () {
    return (
      <PageTemplate className="market-data-page">
        <MainContent>
        <h1 className="mb-4">MARKET DATA</h1>
        <h2>Informed decision-making, uncompromising accessibility</h2>
          <InternalContent className="container px-xl-5 pt-4">
            <Row className="row">
              <Col className="col-md-12 text-left px-4">
                <p>We deliver data through an intuitive platform that maximizes collaboration and limits bottlenecks. Users not only choose the data they need but also benefit from enterprise-focused licensing.</p>
                <p>Whether you're looking for a custom data solution or to replace your current expensive terminal, we are your platform. We deliver all the core functionality you need like multi-asset class coverage, real-time news, economic events, and excel download.</p>
                <p>If you're ready to align your organizations goals with actionable data, contact us now to see how you can get started.</p>
              </Col>
            </Row>
            <Row className="row">
              <Col className="col-md-6 pr-xl-8">
                <FeaturesList className="market-data-list" featuresArray={marketDataFeatures}/>
              </Col>
              <Col className="col-md-6 mt-4">
                <Image imageName="market-data-device-platform.png"/>
                <Button kind="primary" margins="md mt-3">Request demo</Button>
              </Col>
            </Row>
          </InternalContent>
        </MainContent>
      </PageTemplate>
    )
  }
}