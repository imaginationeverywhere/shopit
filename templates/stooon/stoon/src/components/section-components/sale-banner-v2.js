import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SaleBannerV2 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="sale-area margin-top-80 stone-go-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="sales-content-02" style={{background: 'url("'+publicUrl+'assets/img/others/sales2.png") no-repeat center center/cover'}}>
                <h2>SPRING SALE</h2>
                <h6>30% off on selected items</h6>
                <div className="btn-wrapper">
                  <Link to="/collection-full" className="btn btn-black">SHOP THE SALE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        }
}

export default SaleBannerV2