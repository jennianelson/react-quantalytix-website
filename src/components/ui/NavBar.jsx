import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {title: "Home", url: "/", icon: "home"},
  {title: "Market Data", url: "/market-data", icon: "market-data"},
  {title: "Mortgage Analytics", url: "/mortgage-analytics", icon: "mortgage-analytics"},
  {title: "Resources", url: "/resources", icon: "resources"},
  {title: "About Us", url: "/about-us", icon: "about-us"},
  {title: "Contact Us", url: "/contact-us", icon: "contact-us"}
]

const NavBar = () => {
    return (
      <nav className="sidebar-menu">
        <ul className="sidebar-nav">
          {navLinks.map((link, index) => {
            return (
              <li key={index} className="sidebar-nav-item">
                <NavLink
                  activeClassName="sidebar-nav-item active"
                  to={link.url}
                  exact>
                  <div className="menu-icon non-selected"><i className={`icon-${link.icon}-menu`}></i></div>
                  <div className="menu-icon selected"><i className={`icon-${link.icon}-menu-selected`}></i></div>
                {link.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  export default NavBar;

  NavBar.defaultProps = {
    activeLink: ""
  }

              {/* <li onClick={this.handleClick} className={this.state.active ? "sidebar-nav-item active" : "sidebar-nav-item"}>
              <NavLink 
                to="/" 
                exact>
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
            </li> */}