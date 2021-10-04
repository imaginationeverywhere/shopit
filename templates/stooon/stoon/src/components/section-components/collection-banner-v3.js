import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionBannerV3 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="collection-section margin-top-60 stone-go-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="collection-slider-02">
                <div className="collection-slider-item margin-top-20">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/13.png"} alt="" />
                    <div className="thumb-content">
                      <h4>MENS COLLECTION</h4>
                      <h2>SALE</h2>
                      <h3>FLAT 20%</h3>
                      <div className="btn-wrapper">
                        <Link to="/collection-full" className="btn btn-collection">SHOP NOW</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-slider-item margin-top-20">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/14.png"} alt="" />
                    <div className="thumb-content">
                      <h4>TOP TENDING</h4>
                      <h2>40%</h2>
                      <h3>OFF EVERYTHING</h3>
                      <div className="btn-wrapper">
                        <Link to="/collection-full" className="btn btn-collection">SHOP NOW</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-slider-item margin-top-20">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/13.png"} alt="" />
                    <div className="thumb-content">
                      <h4>MENS COLLECTION</h4>
                      <h2>SALE</h2>
                      <h3>FLAT 20%</h3>
                      <div className="btn-wrapper">
                        <Link to="/collection-full" className="btn btn-collection">SHOP NOW</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection-slider-item margin-top-20">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/collection/14.png"} alt="" />
                    <div className="thumb-content">
                      <h4>TOP TENDING</h4>
                      <h2>40%</h2>
                      <h3>OFF EVERYTHING</h3>
                      <div className="btn-wrapper">
                        <Link to="/collection-full" className="btn btn-collection">SHOP NOW</Link>
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

export default CollectionBannerV3