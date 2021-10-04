import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestCollectionSlider = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="fashion-area margin-top-30 padding-bottom-65">
        <div className="container">
          <div className="fashion-slider">
            <div className="row d-flex">
              <div className="col-md-6">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/fashion/1.png" }alt="" />
                </div>
              </div>
              <div className="col-md-6 align-self-center text-center">
                <div className="content">
                  <h6>EVERYDAY ITEMS AND MORE</h6>
                  <h3>LATEST COLLECTION</h3>
                  <p>The bay has a rich surfing history and some legendary waves. Camper vans and board short wearing types line the seafront from dawn until dusk.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <span className="price">$292</span>
                  <div className="btn-wrapper">
                    <a href="#" className="btn btn-collection" tabIndex={0}><i className="icon-add-to-cat" /> ADD TO CART</a>
                  </div>
                </div>
              </div>
            </div>    
            <div className="row d-flex">
              <div className="col-md-6">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/fashion/1.png"} alt="" />
                </div>
              </div>
              <div className="col-md-6 align-self-center text-center">
                <div className="content">
                  <h6>EVERYDAY ITEMS AND MORE</h6>
                  <h3>LATEST COLLECTION</h3>
                  <p>The bay has a rich surfing history and some legendary waves. Camper vans and board short wearing types line the seafront from dawn until dusk.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <span className="price">$292</span>
                  <div className="btn-wrapper">
                    <a href="#" className="btn btn-collection" tabIndex={0}><i className="icon-add-to-cat" /> ADD TO CART</a>
                  </div>
                </div>
              </div>
            </div> 
            <div className="row d-flex">
              <div className="col-md-6">
                <div className="thumb">
                  <img src={publicUrl+"assets/img/fashion/1.png" }alt="" />
                </div>
              </div>
              <div className="col-md-6 align-self-center text-center">
                <div className="content">
                  <h6>EVERYDAY ITEMS AND MORE</h6>
                  <h3>LATEST COLLECTION</h3>
                  <p>The bay has a rich surfing history and some legendary waves. Camper vans and board short wearing types line the seafront from dawn until dusk.</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <span className="price">$292</span>
                  <div className="btn-wrapper">
                    <a href="#" className="btn btn-collection" tabIndex={0}><i className="icon-add-to-cat" /> ADD TO CART</a>
                  </div>
                </div>
              </div>
            </div>      
          </div>
        </div>
      </div>



        }
}

export default LatestCollectionSlider