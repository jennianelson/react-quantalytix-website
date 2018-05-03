import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="d-flex align-items-center justify-content-between  justify-content-lg-end">
            <div className="menu-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="btns-group">
                <button type="button" className="btn btn-rounded btn-secondary">Signup</button>
                <button type="button" className="btn btn-rounded btn-primary">Login</button>
            </div>
        </div>
      </header>
    )
  }
}