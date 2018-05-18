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
                  <span className="menu-icon non-selected"><i className={`icon-${link.icon}-menu`}></i></span>
                  <span className="menu-icon selected"><i className={`icon-${link.icon}-menu-selected`}></i></span>
                <span>{link.title}</span></NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  export default NavBar;