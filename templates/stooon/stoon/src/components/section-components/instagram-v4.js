import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class InstagramV4 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="instagram-area margin-top-75">
	  <div className="container">
	    <div className="row">
	      <div className="col-md-12 text-center">
	        <div className="instagram-title margin-bottom-40">
	          <h3>@ FOLLOW US ON INSTAGRAM</h3>
	        </div>
	      </div>
	    </div>
	    <div className="row">
	      <div className="col-md-12">
	        <div className="instagram-slider2">
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/1.png"} alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/2.png"} alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/3.png"} alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/4.png" }alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/5.png"} alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/6.png"} alt="" />
	          </div>
	          <div className="thumb">
	            <img src={publicUrl+"assets/img/instagram/6.png" }alt="" />
	          </div>
	        </div>
	      </div>
	      <div className="col-md-12 text-center">
	        <div className="btn-wrapper">
	          <a href="#" className="btn btn-gallery">VIEW GALLERY</a>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>


        }
}

export default InstagramV4