import React from 'react';
import {Button, Row, Col} from '../../primitives';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section className="section-pricing">
      <Row className="row mb-md-4 mt-5 mt-xl-0">
        <Col className="col-12 pricing-title">
          <h3 className="text-left sm">Pricing</h3>
        </Col>
      </Row>
    
      <Row className="row">
        <Col className="col-md-4">
          <PricingCard 
            title="Free" 
            imageName="free-price.svg" 
            description="Download a historical subset of the entire database right to your desktop to explore what is possible"
            price="$ 0">
          </PricingCard>
        </Col>
        <Col className="col-md-4">
          <PricingCard
            title="1-Month Subscription"
            imageName="1-month-subscription-price.svg"
            description="Get 30-days of access to our full data set including historical information starting in 2013."
            price="$ 1000">
          </PricingCard>
        </Col>
        <Col className="col-md-4 mt-4 mt-md-0">
          <PricingCard
            className="pricing-card best-value"
            title="Annual Subscription"
            imageName="annual-subscription-price.svg"
            description="Get a full year of access to our comprehensive database and stay ahead of the competition."
            price="$ 800">
          </PricingCard>
        </Col>
      </Row>

      <Row className="row my-4 my-md-5">
        <Col className="col-12">
          <Button kind="primary" size="lg" margins="md mt-3">Get started</Button>
        </Col>
      </Row>
    </section>
  )
}

export default PricingSection;