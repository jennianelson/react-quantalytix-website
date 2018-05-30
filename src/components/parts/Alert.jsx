import React, { Component } from 'react';
class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type != null ? props.type : '',
      hidden: props.hidden != null ? props.hidden : false,
      dismissible: props.dismissible != null ? props.dismissible : true
    }

    this.handleOnCloseClick = this.handleOnCloseClick.bind(this);
  }

  generateClassName() {
    let cssClassList = 'alert';

    if (this.state.type === 'danger'){
      cssClassList = cssClassList.concat(' ', 'alert-danger');
    } 
    if (this.state.type === 'success'){
      cssClassList = cssClassList.concat(' ', 'alert-success');
    }
    
    if (this.state.hidden) cssClassList = cssClassList.concat(' ', 'alert-hidden');

    if (this.props.className != null) {
      return cssClassList.concat(' ', this.props.className);
    }
    return cssClassList;
  }

  renderCollapseButton() {
    if (this.state.dismissible === true) {
      return (
        <button type="button" className="close" onClick={this.handleOnCloseClick} >
          <span aria-hidden="true">×</span>
        </button>
      );
    }
    return null;
  }

  handleOnCloseClick(e) {
    this.setState({hidden: true});
  }

  render() {
    return (
      <div className={this.generateClassName()}>
        <span className="content">          
          {this.props.children}     
        </span>
        {this.renderCollapseButton()}
      </div>
    );
  }
}

export default Alert;