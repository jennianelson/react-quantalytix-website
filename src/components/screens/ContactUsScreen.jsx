import React, {Component} from 'react';
import {Button, Image} from '../primitives';
import {Sidebar, Header} from '../ui';

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
                <div className="col-md-6 px-md-0">
                  <div className="contact-form">
                    <h1 className="text-left mb-1"><span>CONTACT US</span></h1>
                    <h2 className="text-left mb-4 pb-3">OUTMANEUVER. OUTSMART. OUTPERFORM.</h2>

                    <form action="#">
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            {/* <img src="images/svg/contact us/user.svg" className="img-fluid" alt=""/> */}
                            <Image imageName="user.svg"/>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"/>
                      </div>

                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            {/* <img src="images/svg/contact us/Email.svg" className="img-fluid" alt=""/> */}
                            <Image imageName="Email.svg" />
                          </div>
                        </div>
                        <input type="email" className="form-control" placeholder="Email"/>
                      </div>

                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            {/* <img src="images/svg/contact us/phone.svg" className="img-fluid" alt=""/> */}
                            <Image imageName="phone.svg" />
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Phone"/>
                      </div>

                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            {/* <img src="images/svg/contact us/company.svg" className="img-fluid" alt=""/> */}
                            <Image imageName="company.svg" />
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Companyname"/>
                      </div>

                      <div className="input-group mb-4">
                        <button type="submit" className="btn btn-rounded btn-primary lg w-100 mt-5">GET STARTED. CONTACT US!
                        </button>
                      </div>
                    </form>

                  </div>
                  {/* <!-- contact-form --> */}
                </div>

                <div className="col-md-6">
                  <div className="contacts-right-block">
                    <span className="contacts-right-block-logo d-none d-md-block"><a href=""><Image imageName="contact-logo.svg"/></a></span>
                    <span className="link"><a href="tel:123456789"><strong><Image imageName="phone-contact-info.svg"/></strong>123 456 789</a></span>
                    <span className="link"><a href="mailto:Loremipsum@infor.com"><strong><Image imageName="email-contact-info.svg"/></strong>Loremipsum@infor.com</a></span>
                    <span className="link"><strong><Image className="address-contact-info.svg"/></strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magni sunt tenetur tempora a</span></span>

                    <div className="contacts-right-block-bottom">
                      <button type="submit" className="btn btn-rounded btn-blue lg mt-5">LEARN MORE</button>
                    </div>
                  </div> 
                  {/* <!-- contacts-right-block --> */}
                </div>
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