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
                <h3 className="mb-4">MARKET DATA</h3>
                  <p>For the ﬁrst time, we are combining big data and highly advanced analytics and making it available to all. Quantalytix is a web and desktop based framework that provides comprehensive risk analytics and balance sheet management tools for lenders of all sizes.</p>
                  <p>Our goals are simple: we want to make your life easier and your company more proﬁtable. Gaining insights needed to make important strategic decisions should not be difficult.</p>
                  <p>Currently we offer the following:</p>
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