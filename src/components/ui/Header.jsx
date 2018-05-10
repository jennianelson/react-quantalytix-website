import React, {Component} from 'react';
import {Button} from '../primitives'
import {MenuCollapse} from '../ui'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="d-flex align-items-center justify-content-between justify-content-lg-end">
            {/* <div className="menu-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <MenuCollapse className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </MenuCollapse>
            <div className="btns-group">
                <Button type="secondary">Signup</Button>
                <Button type="primary">Login</Button>
            </div>
        </div>
      </header>
    )
  }
}