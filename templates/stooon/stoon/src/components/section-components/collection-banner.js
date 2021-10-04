import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CollectionBanner = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="collection-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 stone-go-top">
              <div className="collection-style-01 margin-top-20">
                <div className="thumb">
                  <img src={ publicUrl+"assets/img/collection/1.png"} alt="" />
                  <div className="content">
                    <h3>WOMEN</h3>
                    <h6>Collection</h6>
                    <Link to="/collection-full">view collection</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 stone-go-top">
              <div className="collection-style-01 margin-top-20">
                <div className="thumb">
                  <img src={ publicUrl+"assets/img/collection/2.png"} alt="" />
                  <div className="content">
                    <h3>MEN</h3>
                    <h6>Collection</h6>
                    <Link to="/collection-full">view collection</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 stone-go-top">
              <div className="collection-style-01 margin-top-20">
                <div className="thumb">
                  <img src={ publicUrl+"assets/img/collection/3.png"} alt="" />
                  <div className="content">
                    <h3>KIDS</h3>
                    <h6>Collection</h6>
                    <Link to="/collection-full">view collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        }
}

export default CollectionBanner