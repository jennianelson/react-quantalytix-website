import React, { Component } from 'react';
import {Container, MainContainer} from './components/primitives';
import {Sidebar, Header} from './components/ui';

// import HomeModule from './components/modules/HomeModule';
import AboutUsModule from './components/modules/AboutUsModule';
// import logo from './logo.svg';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <Container className="container-fluid home-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<Container className="main-container">
						<Header className="header"></Header>
						<MainContainer>
							<AboutUsModule className="mt-md-5"></AboutUsModule>
						</MainContainer>
				</Container>
    	</Container>
    );
  }
}

export default App;
