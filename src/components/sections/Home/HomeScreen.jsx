import React, {Component} from 'react';
import {Button, Image} from '../../primitives';
import PageTemplate from '../../widgets/PageTemplate';
import { MainContent } from '../../Wrappers';

export default class HomeScreen extends Component {
  render() {
    return (
      <PageTemplate className="home-page">
        <MainContent>
          <Image className="desktop-platform" imageName="dual-monitor-desktop-platform.png" />
          <hgroup>
            <h1 className="heavy">Don't let profitable moments pass you by...</h1>
            <h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
          </hgroup>
          <Button kind="primary" size="lg" margins="mb-4">Get Started</Button>
        </MainContent>
    	</PageTemplate>
    )
  }
}