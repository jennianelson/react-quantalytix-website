import React, { Component } from 'react';
import {Container} from './components/primitives';
import {Aside} from './components/widgets';
// import logo from './logo.svg';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Aside className="aside collapse" id="collapseExample"></Aside>

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
