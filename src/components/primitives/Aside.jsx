import React, {Component} from 'react';

export default class Aside extends Component {
  render() {
    const {className, id} = this.props
    return (
      <aside className={className} id={id}>
        {this.props.children}
      </aside>
    )
  }
}