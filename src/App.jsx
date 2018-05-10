import React, { Component } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import AboutUsScreen from './components/screens/AboutUsScreen';
import ContactUsScreen from './components/screens/ContactUsScreen';
import './styles/style.scss';
// import './styles/base/_baseelements.scss';

class App extends Component {
  render() {
    return (
      // <HomeScreen />
      // <AboutUsScreen />
      <ContactUsScreen />
    );
  }
}

export default App;
