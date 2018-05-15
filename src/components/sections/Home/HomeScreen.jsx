import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import {Sidebar, Header} from '../../ui';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="container-fluid home-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<div className="main-container">
					<Header className="header"></Header>
          <div className="main">
            <div className="main-content">
              <Image className="desktop-platform" imageName="dual-monitor-desktop-platform.png" />
              <div>
                  <h1>Don't let profitable moments pass you by...</h1>
                  <h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
              </div>
              <Button kind="primary" size="lg" margins="mb-4">Get Started</Button>
            </div>
          </div>
				</div>
    	</div>
    )
  }
}