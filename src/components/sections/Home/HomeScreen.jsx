import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import PageTemplate from '../../widgets/PageTemplate';
import { MainContent } from '../../Wrappers';
import { NavLink } from 'react-router-dom';

export default class HomeScreen extends Component {

  render() {
    return (
      <PageTemplate className="home-page">
        <MainContent>
          <Image className="desktop-platform" imageName="dual-monitor-desktop-platform.png" />
            <hgroup>
            <h1 className="heavy">An Agile Platform for Market Data &amp; Analytics</h1>
            <h2>Real time financial market data and reporting at your fingertips</h2>
          </hgroup>
          <NavLink to="/contact-us"><Button kind="primary" size="lg" margins="mb-4">Get Started</Button></NavLink>
        </MainContent>
    	</PageTemplate>
    )
  }
}