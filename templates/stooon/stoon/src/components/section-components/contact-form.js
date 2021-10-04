import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactForm = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="contact-form text-center padding-top-80 padding-bottom-80">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <form>
			          <div className="form-row">
			            <div className="form-group col-md-6">
			              <input type="text" className="form-control" id="name" placeholder="Name*" />
			            </div>
			            <div className="form-group col-md-6">
			              <input type="number" className="form-control" id="phone" placeholder="Phone*" />
			            </div>
			          </div>
			          <div className="form-row">
			            <div className="form-group col-md-6">
			              <input type="email" className="form-control" id="email" placeholder="Email*" />
			            </div>
			            <div className="form-group col-md-6">
			              <input type="text" className="form-control" id="topic" placeholder="Topic" />
			            </div>
			          </div>
			          <div className="form-row">
			            <div className="form-group col-md-12">
			              <textarea name="message" id="message" rows={8} placeholder="Message" defaultValue={""} />
			            </div>
			          </div>
			          <button type="submit" className="btn btn-contact">Send Message</button>
			        </form>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default ContactForm