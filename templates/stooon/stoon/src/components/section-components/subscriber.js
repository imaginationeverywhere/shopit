import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Subscriber = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="contact-area">
	  <div className="container">
	    <div className="row">
	      <div className="col-md-12">
	        <div className="contact-content text-center padding-top-80 padding-bottom-80 bg-image">
	          <h2>Keep Connected</h2>
	          <h6>Get updates by subscribe our weekly newsletter</h6>
	          <form>
	            <div className="form-row align-items-center justify-content-center">
	              <div className="col-10 col-sm-6">
	                <div className="input-group">
	                  <div className="input-group-prepend">
	                    <div className="input-group-text"><i className="icon-email-subscribe" /></div>
	                  </div>
	                  <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter Address" />
	                  <div className="subscribe-text"> <a href="#">subscribe</a></div>
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

export default Subscriber