import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import AboutUsScreen from './components/screens/AboutUsScreen';
import ContactUsScreen from './components/screens/ContactUsScreen';
import MarketDataScreen from './components/screens/MarketDataScreen';
import './styles/style.scss';
// import './styles/base/_baseelements.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about-us" component={AboutUsScreen} />
          <Route exact path="/contact-us" component={ContactUsScreen} />
          <Route exact path="/market-data" component={MarketDataScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
