import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import {Sidebar, Header} from '../../ui';

export default class AboutUsScreen extends Component {
  render() {
    return (
      <div className="container-fluid about-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<div className="main-container">
					<Header className="header"></Header>
						<div className="main">
              <div className="main-content mt-md-5">
                <Image className="about-logo" imageName="about-logo.svg" />
                <hgroup className="py-4">
                  <h1>OUR STORY</h1>
                </hgroup>
                <div className="col-md-8 offset-md-2">
                  <p>Quantalytix is a software platform that provides comprehensive risk analytics and balance sheet management for mortgage lenders. We deliver seamless, agile, analytics that give our customers an unfair advantage over the competition.</p>
                  <p>We love data and analytics and we want to bring advanced analytics to everyone. We believe that data and analytics are useless if actionable decisions cannot be made from it. Therefore, we are on a mission to simplify and visualize key performance and risk metrics to help make your organization more proﬁtable.</p>
                  <Button kind="primary" size="lg" margins="mt-md-5 mb-4">Get Started</Button>
                </div>
              </div>
            </div>
				</div>
    	</div>
    )
  }
}