import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import { Sidebar, Header } from '../ui';

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

                  <section className="section-pricing">
                      <div className="row mb-md-4 mt-5 mt-xl-0">
                          <div className="col-12">
                              <h3 className="text-left sm">Pricing</h3>
                          </div>
                      </div>
                      {/* <!-- row --> */}

                      <div className="row">
                        <div className="col-md-4">
                          <div className="pricing-card">
                            <span className="pricing-card-icon"><Image imageName="free-price.svg"/></span>
                            <h3>Free</h3>
                            <p>Download a historical subset of the entire database right to your desktop to explore what is possible</p>
                            <span className="price">$ 0</span>
                            <button type="button" className="btn btn-rounded btn-neutral md mt-3">Download</button>
                            <ul className="pricing-fetures">
                                <li>
                                    <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                    <span>2015 Data Only</span>
                                </li>
                                <li>
                                    <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                    <span>New Issuance Data</span>
                                </li>
                                <li>
                                    <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                    <span>Loan Performance Data</span>
                                </li>
                                <li>
                                    <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                    <span>All Data Fields</span>
                                </li>
                            </ul>
                            {/* <!-- pricing-fetures --> */}
                          </div>
                            {/* <!-- pricing-card --> */}
                          </div>
                          <div className="col-md-4">
                              <div className="pricing-card">
                                  <span className="pricing-card-icon"><Image imageName="1-month-subscription-price.svg"/></span>
                                  <h3>1-Month Subscription</h3>
                                  <p>Get 30-days of access to our full data set including historical information starting in 2013.</p>
                                  <span className="price">$ 1,000</span>
                                  <Button kind="neutral" margins="md mt-3">CONTACT US NOW</Button>
                                  <ul className="pricing-fetures">
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>2013 to Current Data</span>
                                    </li>
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>New Issuance Data</span>
                                    </li>
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>Loan Performance Data</span>
                                    </li>
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>All Data Fields</span>
                                    </li>
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>Single Seat License</span>
                                    </li>
                                    <li>
                                      <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                      <span>Light Customer Support</span>
                                    </li>
                                  </ul>
                                  {/* <!-- pricing-fetures --> */}
                              </div>
                              {/* <!-- pricing-card --> */}
                          </div>
                          <div className="col-md-4 mt-4 mt-md-0">
                              <div className="pricing-card best-value">
                                  <span className="btn btn-rounded btn-neutral best-value-label">BEST VALUE</span>
                                  <span className="pricing-card-icon"><Image imageName="annual-subscription-price.svg"/></span>
                                  <h3>Annual Subscription</h3>
                                  <p>Get a full year of access to our comprehensive database and stay ahead of the competition.</p>
                                  <span className="price">$ 800</span>
                                  <button type="button" className="btn btn-rounded btn-neutral md mt-3">CONTACT US NOW</button>
                                  <ul className="pricing-fetures">
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Discounted 20%!</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>2013 to Current Data</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Updated Monthly</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>New Issuance Data</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Loan Performance Data</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>All Data Fields</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Custom Field Requests</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Two Seat Licenses</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Full Customer Support</span>
                                      </li>
                                      <li>
                                          <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
                                          <span>Free Academic Licenses Available</span>
                                      </li>
                                  </ul>
                                  {/* <!-- pricing-fetures --> */}
                              </div>
                              {/* <!-- pricing-card --> */}
                          </div>
                      </div>
                      {/* <!-- row --> */}

                      <div className="row my-4 my-md-5">
                          <div className="col-12">
                              <Button kind="primary" size="lg" margins="md mt-3">Get started</Button>
                          </div>
                      </div>

                  </section>
                  {/* <!-- section-pricing --> */}
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