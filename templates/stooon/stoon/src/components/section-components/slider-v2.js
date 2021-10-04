import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Slider = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="banner-style-02 stone-go-top">
        <div className="banner-slider-02 mb-0">
          <div>
            <div className="banner__bg2 d-flex align-items-center justify-content-center text-center" style={{background: 'url("'+publicUrl+'assets/img/banner/2.png") no-repeat center center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">FIND YOUR</h3>
                  <h2 className="title" data-animation-in="fadeInRight">EVERYDAY FASHION</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-black" to="/collection-full">SHOP NOW</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="banner__bg2 d-flex align-items-center justify-content-center text-center" style={{background: 'url("'+publicUrl+'assets/img/banner/22.png") no-repeat center center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">30% OFF</h3>
                  <h2 className="title" data-animation-in="fadeInRight">FAVOURITE CLOTHING</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-black" to="/collection-full">GET COLLECTION</Link>
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

export default Slider