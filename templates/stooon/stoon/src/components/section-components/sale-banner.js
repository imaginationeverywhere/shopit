import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SaleBanner = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="sale-area padding-top-80">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="sales-content" style={{background: 'url("'+publicUrl+'assets/img/others/sales.png") no-repeat center center/cover'}}>
                <h2>SPRING SALE</h2>
                <h6>30% off on selected items</h6>
                <div className="btn-wrapper stone-go-top">
                  <Link to="/collection-full" className="btn btn-sales">SHOP THE SALE <i className="icon-arrow-buttom" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        }
}

export default SaleBanner