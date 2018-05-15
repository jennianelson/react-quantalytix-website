import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeScreen from './components/sections/Home/HomeScreen';
import AboutUsScreen from './components/sections/AboutUs/AboutUsScreen';
import ContactUsScreen from './components/sections/ContactUs/ContactUsScreen';
import MarketDataScreen from './components/sections/MarketData/MarketDataScreen';
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
