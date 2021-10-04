import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Error = () => {

	componentDidMount() {

    const $ = window.$;
    
      $(window).on('load', function () {

      	var preLoder = $("#preloader");
        preLoder.fadeOut(0);

     });
  }


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="error-area pb-5">
		  <div className="error-header text-center">
		    <Link to="/">
		      <img src={publicUrl+"assets/img/logo.png"} alt="logo" />
		    </Link>
		  </div>
		  <div className="error-content margin-top-80 text-center">
		    <h2>Page not found.</h2>
		    <h6>Sorry, but the page you are looking for is not found. Please, make<br /> sure you have typed the current URL.</h6>
		    <img src={publicUrl+"assets/img/others/404.png"} alt="" />
		    <div className="btn-wrapper">
		      <Link to="/" className="btn btn-error"><i className="icon-left-arrow-slider" /> Go to home</Link>
		    </div>
		  </div>
		</div>


        }
}

export default Error