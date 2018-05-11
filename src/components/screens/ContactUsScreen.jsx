import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import {Sidebar, Header} from '../ui';
import {ContactUsForm, QContactsBlock} from '../widgets'

export default class ContactUsScreen extends Component {
  render() {
    return (
      <div className="container-fluid about-page">
        <Sidebar className="aside collapse" id="collapseExample"></Sidebar>
				<div className="main-container">
					<Header className="header"></Header>
					<main className="main">
            <div className="main-content">
              <div className="d-md-flex">
                <ContactUsForm />
                <QContactsBlock />
              </div>
            </div>
          </main>

          <footer className="footer">
            <div className="container">
              <ul className="socials">
                <li className="socials-item"><a href=""><i className="icon-tw"></i></a></li>
                <li className="socials-item"><a href=""><i className="icon-google"></i></a></li>
                <li className="socials-item"><a href=""><i className="icon-fb"></i></a></li>
                <li className="socials-item"><a href=""><i className="icon-ln"></i></a></li>
                <li className="socials-item"><a href=""><i className="icon-pint"></i></a></li>
                <li className="socials-item"><a href=""><i className="icon-ig"></i></a></li>
              </ul>
              {/* <!-- socials --> */}
              <div className="d-flex justify-content-center align-items-center flex-column">
                  <p className="copyright">Copyright @ Quantalytix, Inc.</p>
                  <span className="godaddy"><a href=""><Image imageName="godaddy.png"/></a></span>
              </div>
            </div>
          </footer>
        </div>
        {/* --main container */}
      </div>
    )
  }
}