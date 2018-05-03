import React, { Component } from 'react';
import {Container} from './components/primitives';
import {Sidebar, Header} from './components/ui';
// import logo from './logo.svg';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<Container className="main-container">
						<Header className="header"></Header>

						<main className="main">
								<div className="main-content">
										<div className="desktop-platform">
												<img src={require('./assets/images/dual-monitor-desktop-platform.png')} alt="" className="img-fluid"/>
										</div>
										<hgroup>
												<h1>Don't let profitable moments pass you by...</h1>
												<h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
										</hgroup>
										<div className="btn btn-rounded btn-primary lg mb-4">Get Started</div>
								</div>
						</main>
				</Container>
    	</Container>
    );
  }
}

export default App;
