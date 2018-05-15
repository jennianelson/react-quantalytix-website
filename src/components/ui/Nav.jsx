import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    const {className} = this.props
    return (
      <nav className={className}>
        <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <NavLink 
                to="/" 
                exact
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-home-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-home-menu-selected"></i></span>
              Home</NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink 
                to="/market-data" 
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-market-data-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-market-data-menu-selected"></i></span>
              Market Data</NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink 
                to="/mortgage-analytics"
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-mortgage-analytics-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>
              Mortgage Analytics</NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink 
                to="/resources"
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-resources-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-resources-menu-selected"></i></span>
              Resources</NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink 
                to="/about-us"
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-about-us-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-about-us-menu-selected"></i></span>
              About Us</NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink 
                to="/contact-us"
                activeClassName="sidebar-nav-item active">
                <span className="menu-icon non-selected"><i className="icon-contact-us-menu"></i></span>
                <span className="menu-icon selected"><i className="icon-contact-us-menu-selected"></i></span>
              Contact Us</NavLink>
            </li>
        </ul>
      </nav>
    )
  }
}