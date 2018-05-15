import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import { Sidebar, Header } from '../ui';
import { MarketDataList, MarketDataPricing } from '../widgets';
import {Video} from '../parts';

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
                      <h4>Currently we offer the following:</h4>
                      <MarketDataList />
                    </div>

                    <div className="col-md-6">
                      <Image imageName="market-data-device-platform.png"/>
                      <div className="col-12 py-4">
                        <Video />
                      </div>
                      <Button kind="primary" margins="md mt-3">Request demo</Button>
                    </div>

                  </div> 
                  <MarketDataPricing />
                </div>
              </div>
            </main>
        </div>
    </div>
    )
  }
}