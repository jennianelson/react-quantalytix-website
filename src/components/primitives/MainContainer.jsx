import React, {Component} from 'react';

export default class MainContainer extends Component {
  
  render() {
    return (
      <main className="main">
        {this.props.children}
      </main>
    )
  }
}