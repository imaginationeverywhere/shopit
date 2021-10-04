import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionBannerV4 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-banner stone-go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="collection-style-03 margin-top-20">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/collection/9.png"} alt="" />
                  <div className="content">
                    <h3>CLOTHING'S</h3>
                    <h6>Collection</h6>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="collection-style-03 margin-top-20">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/collection/10.png"} alt="" />
                  <div className="content">
                    <h3>ACCESSORIES</h3>
                    <h6>Collection</h6>
                    <div className="btn-wrapper">
                      <Link to="/collection-full" className="btn">Shop Now</Link>
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

export default CollectionBannerV4