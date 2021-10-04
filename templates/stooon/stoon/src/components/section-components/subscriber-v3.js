import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SubscriberV3 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="contact-area grey-bg margin-top-30">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="contact-content-02 text-center padding-top-70 padding-bottom-80">
                  <h2>Keep Connected</h2>
                  <h6>Get updates by subscribe our weekly newsletter</h6>
                  <form>
                    <div className="form-row align-items-center justify-content-center">
                      <div className="col-md-10 col-sm-12 col-12">
                        <div className="input-group">
                          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="EMAIL ADDRESS" />
                          <div className="subscribe-text"> <a href="#"><i className="icon-arrow-point-to-right" /></a></div>
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

export default SubscriberV3