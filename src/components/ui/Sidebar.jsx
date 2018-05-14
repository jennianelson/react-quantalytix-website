import React, {Component} from 'react';
import Nav from './Nav';
import { Image, Link } from '../primitives';
import {MenuCollapse} from '../ui'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="aside collapse" id="collapseExample">
        <MenuCollapse className="close thick" />
            <div className="aside-content">
                <div className="text-center">
                  <Link href="#" className="brand"><Image imageName="qlogo-dark-psd.png"/></Link>
                </div>
                <Nav className="sidebar-menu"></Nav>
            </div>
      </aside>
    )
  }
}