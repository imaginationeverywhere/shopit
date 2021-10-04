import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="about-content margin-top-80">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="content-left">
			          <h3>We take fashion personally &amp; we bring you happiness</h3>
			          <p>Why not return to our amazing shop and start filling it with products. Just click on the button below to instantly get back to the shop page. <br /><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			          <span>Moin Khan</span>
			        </div>
			      </div>
			      <div className="col-lg-7">
			        <div className="thumb">
			          <img src={publicUrl+"assets/img/others/about.png" }alt="" />
			          {/* video button */}
			          <div className="video-btn-style-01">
			            <a href="#"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default About