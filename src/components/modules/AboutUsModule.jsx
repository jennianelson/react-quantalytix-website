import React, {Component} from 'react';
import Button from '../primitives/Button'

export default class AboutUsModule extends Component {
  generateClassName() {
    if (this.props.className != null) {
      return `main-content ${this.props.className}`;
    }
    return `main-content`;
  }

  render() {
    return (
      <div className={this.generateClassName()}>
        <div className="about-logo">
          <img src={require('../../assets/images/svg/logo icons/about-logo.svg')} alt="" className="img-fluid"/>
        </div>
        <hgroup className="py-4">
          <h1>OUR STORY</h1>
        </hgroup>
        <div className="col-md-8 offset-md-2">
          <p>Quantalytix is a software platform that provides comprehensive risk analytics and balance sheet management for mortgage lenders. We deliver seamless, agile, analytics that give our customers an unfair advantage over the competition.</p>
          <p>We love data and analytics and we want to bring advanced analytics to everyone. We believe that data and analytics are useless if actionable decisions cannot be made from it. Therefore, we are on a mission to simplify and visualize key performance and risk metrics to help make your organization more proﬁtable.</p>
          <Button type="primary" others="lg mt-4 mt-md-5 mb-4">Get Started</Button>
        </div>
      </div>
    )
  }
}