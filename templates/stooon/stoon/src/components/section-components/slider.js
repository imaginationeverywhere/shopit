import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Slider = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="banner-style-01 stone-go-top">                
        <div className="banner-slider">
          <div>
            <div className="banner__bg d-flex align-items-center" style={{background: 'url("'+publicUrl+'assets/img/banner/1.png") no-repeat center center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">30% OFF</h3>
                  <h2 className="title" data-animation-in="fadeInRight">FAVOURITE CLOTHING</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-white" to="/collection-full">GET COLLECTION <i className="icon-arrow-buttom" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="banner__bg d-flex align-items-center" style={{background: 'url("'+publicUrl+'assets/img/banner/11.png") no-repeat center center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">30% OFF</h3>
                  <h2 className="title" data-animation-in="fadeInRight">FAVOURITE CLOTHING</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-white" to="/collection-full">GET COLLECTION <i className="icon-arrow-buttom" /></Link>
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