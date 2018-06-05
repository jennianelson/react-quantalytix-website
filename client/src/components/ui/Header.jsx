import React, {Component} from 'react';
// import {Button} from '../primitives'
import {MenuCollapse} from '../ui';
import $ from 'jquery';

export default class Header extends Component {
  componentDidMount() {
    $(".menu-toggle").click(function(){
      $(".aside").removeClass("d-none");
      $(".aside").addClass("d-block");
    });

    $(".close").click(function(){
      $(".aside").addClass("d-none");
      $(".aside").removeClass("d-block");
    });
  }
  render() {
    return (
      <header className="header">
        <div className="d-flex align-items-center justify-content-between justify-content-lg-end">
            <MenuCollapse className="menu-toggle">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MenuCollapse>
            {/* <div className="btns-group">
                <Button kind="secondary">Signup</Button>
                <Button kind="primary">Login</Button>
            </div> */}
        </div>
      </header>
    )
  }
}

//What I started when trying to replace the jQuery with JS:

// const xButton = document.getElementsByClassName('close')[0]

// function expandMenu() {
//   const collapsedMenu = document.getElementsByClassName('aside')[0]
//   collapsedMenu.classList.add('d-block')
// }

// function closeMenu() {
//   if (xButton) {
//     xButton.onClick
//   }
// }