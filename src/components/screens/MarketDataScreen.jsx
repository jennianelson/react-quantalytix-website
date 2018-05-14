import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import { Sidebar, Header } from '../ui';
import MarketDataPricing from '../widgets/MarketDataPricing';

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

                        <ul class="market-data-list">
                            <li>
                              <Image imageName="ridiculously-fast-data.svg"/>
                              <div>
                                <h4>Ridiculously fast data</h4>
                                <p>made accessible through familiar tools like Excel, Qlik, and Tableau.</p>
                              </div>
                            </li>
                            <li>
                              <Image imageName="gorgeous.svg"/>
                                <div>
                                    <h4>Gorgeous</h4>
                                    <p>ment and key performance indicator (KPI) tracking.</p>
                                </div>
                            </li>
                            <li>
                                <Image imageName="simplified-access.svg"/>
                                <div>
                                    <h4>Simpliﬁed access</h4>
                                    <p>to market data including GNMA loan level data!</p>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- market-data-list --> */}
                    </div>
                    <div className="col-md-6">
                      <Image imageName="market-data-device-platform.png"/>
                      <div className="col-12 py-4">
                        <div className="videoWrapper videoWrapper169 js-videoWrapper">
                          {/* <iframe className="videoIframe js-videoIframe" src="https://www.youtube.com/embed/hgzzLIa-93c?autoplay=1& modestbranding=1&rel=0&hl=sv"></iframe> */}
                          {/* <button className="videoPoster js-videoPoster" style="background-image:url('../images/video-poster.png');">Play video</button> */}
                        </div>
                      </div>
                        <Button kind="primary" margins="md mt-3">Request demo</Button>
                    </div>
                  </div>
                  <MarketDataPricing />
                </div>
                {/* <!-- container --> */}
              </div>
            </main>
            {/* <!-- main --> */}
        </div>
        {/* <!-- main-container --> */}
    </div>
    )
  }
}