import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SliderV4 = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="banner-style-04">                
        <div className="banner-slider">
          <div>
            <div className="banner__bg2 d-flex align-items-center" style={{background: 'url("'+publicUrl+'assets/img/banner/4.png") no-repeat top center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">Winter / 2020</h3>
                  <h2 className="title" data-animation-in="fadeInRight">Youngest Gestation <br />Casual Supercool</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-white" to="/collection-full">GET COLLECTION</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="banner__bg2 d-flex align-items-center" style={{background: 'url("'+publicUrl+'assets/img/banner/44.png") no-repeat top center/cover'}}>
              <div className="container-fluid px-5">
                <div className="banner-content">
                  <h3 className="subtitle" data-animation-in="fadeInLeft">Winter / 2020</h3>
                  <h2 className="title" data-animation-in="fadeInRight">Youngest Gestation <br />Casual Supercool</h2>
                  <div className="margin-top-50 pl-1">
                    <div className="btn-wrapper" data-animation-in="fadeInDown">
                      <Link className="btn btn-white" to="/collection-full">GET COLLECTION</Link>
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

export default SliderV4