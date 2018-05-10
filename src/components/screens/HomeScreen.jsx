import React, {Component} from 'react';
import {Button} from '../primitives';
import {Sidebar, Header, Container, Image} from '../ui';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<Container className="main-container">
					<Header className="header"></Header>
          <Container className="main">
            <div className="main-content">
              <Image className="desktop-platform" imageName="dual-monitor-desktop-platform.png" />
              <Container>
                  <h1>Don't let profitable moments pass you by...</h1>
                  <h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
              </Container>
              <Button type="primary" size="lg" margins="mb-4">Get Started</Button>
            </div>
          </Container>
				</Container>
    	</Container>
    )
  }
}