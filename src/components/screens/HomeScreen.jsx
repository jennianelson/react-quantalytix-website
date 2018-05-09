import React, {Component} from 'react';
import {Sidebar, Header, Container} from '../ui';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<Container className="main-container">
					<Header className="header"></Header>
          <Container className="main">
            <div className="main-content">
              {/* <ImageWrapper className="desktop-platform">
                <img src={require('../../assets/images/dual-monitor-desktop-platform.png')} alt="" className="img-fluid"/>
              </ImageWrapper> */}
              <hgroup>
                  <h1>Don't let profitable moments pass you by...</h1>
                  <h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
              </hgroup>
              <div className="btn btn-rounded btn-primary lg mb-4">Get Started</div>
            </div>
          </Container>
				</Container>
    	</Container>
    )
  }
}