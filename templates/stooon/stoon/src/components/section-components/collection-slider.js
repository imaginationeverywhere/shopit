import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionSlider = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-section padding-top-70 padding-bottom-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center margin-bottom-40">
                  <h3>COLLECTION</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="collection-slider">
                  <div className="collection-item">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/collection/4.png"} alt="" />
                      <div className="thumb-content">
                        <h2>FASHION CLOTHING</h2>
                        <div className="btn-wrapper stone-go-top">
                          <Link to="collection-full" className="btn btn-white">SHOP NOW <i className="icon-arrow-buttom" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection-item">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/collection/5.png"} alt="" />
                      <div className="thumb-content">
                        <h2>ACCESSORIES</h2>
                        <div className="btn-wrapper stone-go-top">
                          <Link to="collection-full" className="btn btn-white">SHOP NOW <i className="icon-arrow-buttom" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection-item">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/collection/4.png"} alt="" />
                      <div className="thumb-content">
                        <h2>FASHION CLOTHING</h2>
                        <div className="btn-wrapper stone-go-top">
                          <Link to="collection-full" className="btn btn-white">SHOP NOW <i className="icon-arrow-buttom" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection-item">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/collection/5.png"} alt="" />
                      <div className="thumb-content">
                        <h2>ACCESSORIES</h2>
                        <div className="btn-wrapper stone-go-top">
                          <Link to="collection-full" className="btn btn-white">SHOP NOW <i className="icon-arrow-buttom" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default CollectionSlider