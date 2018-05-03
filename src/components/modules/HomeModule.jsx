import React, {Component} from 'react';

export default class HomeModule extends Component {
  generateClassName() {
    if (this.props.className != null) {
      return `main-content ${this.props.className}`;
    }
    return `main-content`;
  }

  render() {
    return (
      <div className={this.generateClassName()}>
        <div className="desktop-platform">
					<img src={require('../../assets/images/dual-monitor-desktop-platform.png')} alt="" className="img-fluid"/>
        </div>
        <hgroup>
            <h1>Don't let profitable moments pass you by...</h1>
            <h2>Real-time mortgage data, advanced analytics, and reporting at your fingertips</h2>
        </hgroup>
        <div className="btn btn-rounded btn-primary lg mb-4">Get Started</div>
      </div>
    )
  }
}