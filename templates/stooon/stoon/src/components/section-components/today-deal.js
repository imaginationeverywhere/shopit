import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TodayDeal = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="deal-area padding-top-80 stone-go-top">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-12">
                <div className="deal-content">
                  <h2>DEAL OF THE DAY!</h2>
                  <h6>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content<br /> here, content here', making it look like readable English.</h6>
                  <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                  </div>
                  <div className="btn-wrapper">
                    <Link to="/collection-full" className="btn btn-deal">SHOP THE SALE</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default TodayDeal