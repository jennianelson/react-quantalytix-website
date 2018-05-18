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
          <InternalContent className="container px-xl-5 pt-4">
            <Row className="row">
              <Col className="col-md-6 text-left pr-xl-5">
                <h2 className="mb-4">MARKET DATA</h2>
                {/* <h4 className="text-center">Informed Decision-making, Uncompromising Accessibility</h4> */}
                  <p>We deliver data through an intuitive platform that maximizes collaboration and limits bottlenecks. Users not only choose the data they need but also benefit from enterprise-focused licensing.</p>
                  <p>Whether you're looking for a custom data solution or to replace your current expensive terminal, we are your platform. We deliver all the core functionality you need like multi-asset class coverage, real-time news, economic events, and excel download.</p>
                  <p>If you're ready to align your organizations goals with actionable data, contact us now to see how you can get started.</p>
                 
                  <FeaturesList className="market-data-list" featuresArray={marketDataFeatures}/>
              </Col>
              <Col className="col-md-6">
                <Image imageName="market-data-device-platform.png"/>
                <Col className="col-12 py-4">
                  <Video />
                </Col>
                <Button kind="primary" margins="md mt-3">Request demo</Button>
              </Col>
            </Row>
            <PricingSection />
          </InternalContent>
        </MainContent>
      </PageTemplate>
    )
  }
}