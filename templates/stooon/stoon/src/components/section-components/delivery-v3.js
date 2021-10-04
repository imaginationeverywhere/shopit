import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class DeliveryV3 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="delivery-area padding-top-80">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-4">
                  <div className="single-delivery-02 d-flex grey-bg justify-content-center border-0 py-4">
                    <div className="left">
                      <i className="icon-delivery-car red-icon" />
                    </div>
                    <div className="right">
                      <h6>FREE SHIPPING, RETURN</h6>
                      <p>Free Shipping On All US Orders</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-delivery-02 d-flex grey-bg justify-content-center border-0 py-4">
                    <div className="left">
                      <i className="icon-money-back red-icon" />
                    </div>
                    <div className="right">
                      <h6>MONEY BACK GUARANTEE</h6>
                      <p>30 Days Money Back Guarantee</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-delivery-02 d-flex grey-bg justify-content-center border-0 py-4">
                    <div className="left">
                      <i className="icon-phone-support red-iconv " />
                    </div>
                    <div className="right">
                      <h6>1-800-333-44-55</h6>
                      <p>24/7 Days Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        }
}

export default DeliveryV3