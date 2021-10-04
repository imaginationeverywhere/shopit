import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div>
			  <div className="mapouter">
			    <div className="gmap_canvas">
			      <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
			    </div>
			  </div>
			  {/* contact area start  */}
			  <div className="contact-info margin-top-80">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-12">
			          <div className="section-title text-center">
			            <h3>CONTACT US FOR ANY QUARY</h3>
			          </div>
			        </div>
			      </div>
			      <div className="row">
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="icon-call-header" />
			            </div>
			            <a href="tel:+12345678910">+123456 78910</a><br />
			            <a href="tel:+12345678911">+123456 78911</a><br />
			            <span>Mobile</span>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="fa fa-envelope-open" />
			            </div>
			            <a href="#">brandfashion@email.com</a><br />
			            <a href="#">support@codingeek.com</a><br />
			            <span>Email</span>
			          </div>
			        </div>
			        <div className="col-md-4">
			          <div className="single-contact-box">
			            <div className="icon">
			              <i className="fa fa-map-marker" />
			            </div>
			            <span>
			              125/A, CA Commercial Area <br />California, USA<br /> Address
			            </span>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* contact area end  */}
			</div>

        }
}

export default ContactInfo