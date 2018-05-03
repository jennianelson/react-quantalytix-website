import React, {Component} from 'react';
import Nav from './Nav';

export default class Sidebar extends Component {
  render() {
    const {className, id} = this.props
    return (
      <aside className={className} id={id}>
        <span className="close thick" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></span>
            <div className="aside-content">
                <div className="text-center">
                    <a href="#" className="brand"><img src={require('../../assets/images/qlogo-dark-psd.png')} className="img-fluid" alt=""/></a>
                </div>
                <Nav className="sidebar-menu"></Nav>
            </div>
      </aside>
    )
  }
}