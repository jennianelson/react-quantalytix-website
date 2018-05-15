import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import { Image } from '../primitives';
import {MenuCollapse} from '../ui';

import '../../styles/layouts/_sidebar.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="aside collapse" id="collapseExample">
        <MenuCollapse className="close thick" />
            <div className="aside-content">
                <div className="text-center">
                  <NavLink to="/" className="brand"><Image imageName="qlogo-dark-psd.png"/></NavLink>
                </div>
                <Nav className="sidebar-menu"></Nav>
            </div>
      </aside>
    )
  }
}