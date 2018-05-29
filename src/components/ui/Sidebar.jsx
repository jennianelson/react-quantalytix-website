import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { Image } from '../primitives';
import {MenuCollapse} from '../ui';

export default class Sidebar extends Component {

  render() {
    return (
      <aside className="aside collapse" id="collapseExample">
        <MenuCollapse className="close thick" />
            <div className="aside-content">
                <div className="text-left">
                  <NavLink to="/" className="brand"><Image imageName="qlogo-dark-psd.png"/></NavLink>
                </div>
                <NavBar/>
            </div>
      </aside>
    )
  }
}