import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    const {className} = this.props
    return (
      <nav className={className}>
        <ul className="sidebar-nav">
            <li className="sidebar-nav-item active"><a href="index.html"><span className="menu-icon non-selected"><i className="icon-home-menu"></i></span><span className="menu-icon selected"><i className="icon-home-menu-selected"></i></span>Home</a></li>
            <li className="sidebar-nav-item"><a href="market-data.html"><span className="menu-icon non-selected"><i className="icon-market-data-menu"></i></span><span className="menu-icon selected"><i className="icon-market-data-menu-selected"></i></span>Market Data</a></li>
            <li className="sidebar-nav-item"><a href="mortage-analytics.html"><span className="menu-icon non-selected"><i className="icon-mortgage-analytics-menu"></i></span><span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>Mortgage Analytics</a></li>
            <li className="sidebar-nav-item"><a href="resourses.html"><span className="menu-icon non-selected"><i className="icon-resources-menu"></i></span><span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>Resources</a></li>
            <li className="sidebar-nav-item"><a href="about-us.html"><span className="menu-icon non-selected"><i className="icon-about-us-menu"></i></span><span className="menu-icon selected"><i className="icon-about-us-menu-selected"></i></span>About Us</a></li>
            <li className="sidebar-nav-item"><a href="contact-us.html"><span className="menu-icon non-selected"><i className="icon-contact-us-menu"></i></span><span className="menu-icon selected"><i className="icon-contact-us-menu-selected"></i></span>Contact Us</a></li>
        </ul>
      </nav>
    )
  }
}