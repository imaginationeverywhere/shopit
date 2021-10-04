import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SubscriberV2 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="contact-area grey-bg margin-top-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="contact-content-03 text-center padding-top-70 padding-bottom-80">
                  <div className="section-title-02">
                    <h3>KEEP CONNECTED</h3>
                  </div>
                  <h6>Subscribe to our newsletter and be the first to receive the latest fashion news, promotions and more!<br /> Would you like to stop receiving our newsletter?</h6>
                  <form>
                    <div className="form-row align-items-center justify-content-center">
                      <div className="col-10 col-sm-8">
                        <div className="input-group">
                          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="E-mail" />
                        </div>
                        <div className="btn-wrapper">
                          <a href="#" className="btn btn-yellow">SUBSCRIBE</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default SubscriberV2