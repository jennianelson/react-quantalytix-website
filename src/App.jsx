import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {HomeScreen, AboutUsScreen, ContactUsScreen, MarketDataScreen, MortgageAnalyticsScreen, ResourcesScreen} from './components/sections'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about-us" component={AboutUsScreen} />
          <Route exact path="/contact-us" component={ContactUsScreen} />
          <Route exact path="/market-data" component={MarketDataScreen} />
          <Route exact path="/mortgage-analytics" component={MortgageAnalyticsScreen} />
          <Route exact path="/resources" component={ResourcesScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
