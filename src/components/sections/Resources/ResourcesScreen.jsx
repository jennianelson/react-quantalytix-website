import React, {Component} from 'react';
// import {Button, Image} from '../../primitives';
import { Sidebar, Header } from '../../ui';

export default class ResourcesScreen extends Component {

  render () {
    return (
      <div className="container-fluid market-data-page">
      <Sidebar />
      <div className="main-container">
        <Header />
          <main className="main">
            <div className="main-content">
              <div className="container px-xl-4 pt-4">
              <div className="row">
                <div className="col-md-6 pl-5">
                    <h3 className="mb-4 text-left pl-2">RESOURCES</h3>
                    <p className="mb-0 text-left pl-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
              </div>

              <section className="resources-section">
                <div className="row">
                    <div className="col-md-12 text-left pr-xl-5">
                        <h3 className="text-left sm my-4">OUR BLOG</h3>

                        {/* <div className="blog-slider slick">
                            <a href="#" className="item">
                                <Image imageName="slide-1.png"/>
                                <span className="item-content">
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, at. Nobis maxime ut quis consequuntur dolorem, qui totam adipisci eligendi labore porro non aut nesciunt sapiente assumenda fugiat ratione.</p>
                                    <span className="date">30 march 2018</span>
                                </span>
                            </a>

                            <a href="#" className="item">
                                <Image imageName="slide-2.png"/>
                                <span className="item-content">
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, at. Nobis maxime ut quis consequuntur dolorem, qui totam adipisci eligendi labore porro non aut nesciunt sapiente assumenda fugiat ratione.</p>
                                    <span className="date">30 march 2018</span>
                                </span>
                            </a>

                            <a href="#" className="item">
                                <Image imageName="slide-3.png"/>
                                <span className="item-content">
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, at. Nobis maxime ut quis consequuntur dolorem, qui totam adipisci eligendi labore porro non aut nesciunt sapiente assumenda fugiat ratione.</p>
                                    <span className="date">30 march 2018</span>
                                </span>
                            </a>

                            <a href="#" className="item">
                                <Image imageName="slide-1.png" />
                                <span className="item-content">
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis, at. Nobis maxime ut quis consequuntur dolorem, qui totam adipisci eligendi labore porro non aut nesciunt sapiente assumenda fugiat ratione.</p>
                                    <span className="date">30 march 2018</span>
                                </span>
                            </a>
                        </div> */}
                    </div>
                </div>
              </section>

              <section className="testimonials-section mb-4">
                  <div className="row">
                      <div className="col-md-12 text-left pr-xl-5">
                          <h3 className="text-left sm my-4">CUSTOMER TESTIMONIALS</h3>

                          {/* <div className="testimonials-slider slick">
                              <a href="#" className="item">
                                  <span className="avatar-photo"><Image imageName="avatar.png"/></span>
                                  <span className="item-content">
                                      <span className="d-block text-center pb-3"><Image imageName="quotes.svg" className="img-fluid d-inline-block"/></span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque facilis non soluta iure pariatur veniam dignissimos, voluptatem incidunt nisi sint ex eos, error fuga, quo aliquam officiis. Beatae, cum.</p>
                                      <span className="text-bottom">_Lorem ipsum_</span>
                                  </span>
                              </a>

                              <a href="#" className="item">
                                  <span className="avatar-photo"><Image imageName="avatar.png"/></span>
                                  <span className="item-content">
                                      <span className="d-block text-center pb-3"><Image imageName="quotes.svg" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque facilis non soluta iure pariatur veniam dignissimos, voluptatem incidunt nisi sint ex eos, error fuga, quo aliquam officiis. Beatae, cum.</p>
                                      <span className="text-bottom">_Lorem ipsum_</span>
                                  </span>
                              </a>

                              <a href="#" className="item">
                                  <span className="avatar-photo"><Image imageName="images/avatar.png" /></span>
                                  <span className="item-content">
                                      <span className="d-block text-center pb-3"><Image imageName="quotes.svg" className="img-fluid d-inline-block" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque facilis non soluta iure pariatur veniam dignissimos, voluptatem incidunt nisi sint ex eos, error fuga, quo aliquam officiis. Beatae, cum.</p>
                                      <span className="text-bottom">_Lorem ipsum_</span>
                                  </span>
                              </a>

                              <a href="#" className="item">
                                  <span className="avatar-photo"><Image imageName="images/avatar.png"/></span>
                                  <span className="item-content">
                                      <span className="d-block text-center pb-3"><Image imageName="quotes.svg" className="img-fluid d-inline-block" /></span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque facilis non soluta iure pariatur veniam dignissimos, voluptatem incidunt nisi sint ex eos, error fuga, quo aliquam officiis. Beatae, cum.</p>
                                      <span className="text-bottom">_Lorem ipsum_</span>
                                  </span>
                              </a>
                          </div> */}
                      </div>
                  </div>
              </section>

              </div>
            </div>
          </main>
        </div>
    </div>
    )
  }
}