import React, { Component } from 'react';
import {Container, Aside, Nav} from './components/primitives';
// import logo from './logo.svg';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Aside className="aside collapse" id="collapseExample">
            <span className="close thick" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></span>
            <Container className="aside-content">
                <Container className="text-center">
                    <a href="#" className="brand"><img src={require('./assets/images/qlogo-dark-psd.png')} className="img-fluid" alt=""/></a>
                </Container>

                <Nav className="sidebar-menu">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-item active"><a href="index.html"><span className="menu-icon non-selected"><i className="icon-home-menu"></i></span><span className="menu-icon selected"><i className="icon-home-menu-selected"></i></span>Home</a></li>
                        <li className="sidebar-nav-item"><a href="market-data.html"><span className="menu-icon non-selected"><i className="icon-market-data-menu"></i></span><span className="menu-icon selected"><i className="icon-market-data-menu-selected"></i></span>Market Data</a></li>
                        <li className="sidebar-nav-item"><a href="mortage-analytics.html"><span className="menu-icon non-selected"><i className="icon-mortgage-analytics-menu"></i></span><span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>Mortgage Analytics</a></li>
                        <li className="sidebar-nav-item"><a href="resourses.html"><span className="menu-icon non-selected"><i className="icon-resources-menu"></i></span><span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>Resources</a></li>
                        <li className="sidebar-nav-item"><a href="about-us.html"><span className="menu-icon non-selected"><i className="icon-about-us-menu"></i></span><span className="menu-icon selected"><i className="icon-about-us-menu-selected"></i></span>About Us</a></li>
                        <li className="sidebar-nav-item"><a href="contact-us.html"><span className="menu-icon non-selected"><i className="icon-contact-us-menu"></i></span><span className="menu-icon selected"><i className="icon-contact-us-menu-selected"></i></span>Contact Us</a></li>
                    </ul>
                </Nav>
            </Container>
        </Aside>

				<div className="main-container">
						<header className="header">

								<div className="d-flex align-items-center justify-content-between  justify-content-lg-end">
										<div className="menu-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
												<span></span>
												<span></span>
												<span></span>
										</div>
										<div className="btns-group">
												<button type="button" className="btn btn-rounded btn-secondary">Signup</button>
												<button type="button" className="btn btn-rounded btn-primary">Login</button>
										</div>
								</div>
						</header>

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
				</div>
    	</Container>
    );
  }
}

export default App;
