import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import { Sidebar, Header } from '../../ui';
import PricingSection  from './PricingSection';
import FeaturesList from './FeaturesList';
import {Video} from '../../parts';
import {mortgageAnalyticsFeatures} from './datasets'

export default class MortgageAnalyticsScreen extends Component {
  render () {
    return (
      <div class="container-fluid market-data-page">
         <Sidebar />
        <div className="main-container">
          <Header />
          <main className="main">
              <div className="main-content">
                <div className="container px-xl-5 pt-4">
                  <div className="row">

                    <div className="col-md-6 text-left pr-xl-5">
                      <h3 className="mb-4">MORTGAGE ANALYTICS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lob ortis nisl</p>
                        <p>Another paragraph of text</p>
                        <p>Currently we offer the following:</p>
                      <FeaturesList className="market-data-list" featuresArray={mortgageAnalyticsFeatures}/>
                    </div>

                    <div className="col-md-6">
                      <Image imageName="market-data-device-platform.png"/>
                      <div className="col-12 py-4">
                        <Video />
                      </div>
                      <Button kind="primary" margins="md mt-3">Request demo</Button>
                    </div>

                  </div> 
                  <PricingSection />
                </div>
              </div>
            </main>
        </div>
      </div>
    )
  }
}