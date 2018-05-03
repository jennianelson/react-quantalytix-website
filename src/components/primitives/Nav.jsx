import React, {Component} from 'react';

export default class Nav extends Component {
  render() {
    const {className} = this.props
    return (
      <aside className={className}>
        {this.props.children}
      </aside>
    )
  }
}