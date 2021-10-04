import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionSlider = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-banner margin-bottom-80 stone-go-top">
          <div className="container">
            <div className="row collection-slider-03">
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/11.png"} alt="" />
                  </div>
                  <div className="content">
                    <h3>Men's<br /> Collection</h3>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="content">
                    <h3>Women's<br /> Collection</h3>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/12.png"} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/11.png"} alt="" />
                  </div>
                  <div className="content">
                    <h3>Men's<br /> Collection</h3>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collection-style-04 margin-top-30">
                  <div className="content">
                    <h3>Women's<br /> Collection</h3>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn btn-collection2">Shop Now</Link>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/12.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default CollectionSlider