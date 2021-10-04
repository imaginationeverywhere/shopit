import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Delivery = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="delivery-area padding-top-80">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div className="single-delivery text-center">
                <i className="icon-delivery-car" />
                <h6>FREE SHIPPING, RETURN</h6>
                <p>Free Shipping On All US Orders</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-delivery text-center">
                <i className="icon-money-back" />
                <h6>MONEY BACK GUARANTEE</h6>
                <p>30 Days Money Back Guarantee</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-delivery text-center">
                <i className="icon-phone-support" />
                <h6>1-800-333-44-55</h6>
                <p>24/7 Days Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>


        }
}

export default Delivery