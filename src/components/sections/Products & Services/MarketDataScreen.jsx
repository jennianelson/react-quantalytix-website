import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import { Sidebar, Header } from '../../ui';
import PricingSection  from './PricingSection';
import FeaturesList from './FeaturesList';
import {Video} from '../../parts';

import '../../../styles/modules/_main.scss';
import '../../../styles/modules/_market-data.scss';

const featuresArray = [
  {image: "ridiculously-fast-data.svg",
  heading: "Ridiculously fast data",
  description: "made accessible through familiar tools like Excel, Qlik, and Tableau."},
  {image:"gorgeous.svg",
  heading:"Gorgeous, intuitive dashboards",
  description:"for key strategic management and key performance indicator (KPI) tracking."},
  {image:"simplified-access.svg",
  heading:"Simpliﬁed access",
  description:"to market data including GNMA loan level data!"}
]

export default class MarketDataScreen extends Component {
  render () {
    return (
      <div className="container-fluid market-data-page">
        <Sidebar />
        <div className="main-container">
          <Header />
            <main className="main">
              <div className="main-content">
                <div className="container px-xl-5 pt-4">
                  <div className="row">

                    <div className="col-md-6 text-left pr-xl-5">
                      <h3 className="mb-4">MARKET DATA</h3>
                        <p>For the ﬁrst time, we are combining big data and highly advanced analytics and making it available to all. Quantalytix is a web and desktop based framework that provides comprehensive risk analytics and balance sheet management tools for lenders of all sizes.</p>
                        <p>Our goals are simple: we want to make your life easier and your company more proﬁtable. Gaining insights needed to make important strategic decisions should not be difficult.</p>
                        <p>Currently we offer the following:</p>
                      <FeaturesList className="market-data-list" featuresArray={featuresArray}/>
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