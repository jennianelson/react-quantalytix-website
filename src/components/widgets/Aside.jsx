import React, {Component} from 'react';
import {Container} from '../../components/primitives';
import {Nav} from '../../components/parts';

export default class Aside extends Component {
  render() {
    const {className, id} = this.props
    return (
      <aside className={className} id={id}>
        <span className="close thick" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></span>
            <Container className="aside-content">
                <Container className="text-center">
                    <a href="#" className="brand"><img src={require('../../assets/images/qlogo-dark-psd.png')} className="img-fluid" alt=""/></a>
                </Container>
                <Nav className="sidebar-menu"></Nav>
            </Container>
      </aside>
    )
  }
}