import React, {Component} from 'react';
import {Button, Image, Col} from '../../primitives';
import {MainContent} from '../../Wrappers';
import PageTemplate from '../../widgets/PageTemplate';

export default class AboutUsScreen extends Component {
  render() {
    return (
      <PageTemplate className="about-page office-background">
        <MainContent className="mt-md-5">
            <Col className="col-md-8 offset-md-2">
              <Image className="about-logo" imageName="about-logo.svg" />
              <hgroup className="py-4">
                <h1>OUR STORY</h1>
              </hgroup>
              <p>Meet the founders of Quantalytix, Chris and Will. As former bankers, we saw how important it is to have access to market data in order to appropriately manage risk. We also saw many instances where current data solutions limited accessibility due to high costs and restrictive licensing. In an industry becoming more complex with each passing day, we saw the need to put more data and information in the hands of more people. This is why we started Quantalytix.</p>
              <p>In an age of information, we believe having the right tools to access data in a timely and efficient way are essential to productivity. Our market data platform allows users to accomplish this and reach new levels of productivity. By offering the core features and functionality, our platform allows users to work at their own pace and not get slowed down by bulky platforms with esoteric navigation features.</p>
              <p>If you are ready to equip and enable your team with more data, contact us now to see how you can get started. The best decisions arise from collaborative effort. Its time your team have the access and information they need to make them. </p>
              <Button kind="primary" size="lg" margins="mt-md-5 mb-4">Get Started</Button>
            </Col>
        </MainContent>
    	</PageTemplate>
    )
  }
}