import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CommingSoon = () => {

	 componentDidMount() {

	 	const $ = window.$;
    
	      $(window).on('load', function () {

	      	var preLoder = $("#preloader");
	        preLoder.fadeOut(0);

	     });
      // countdown 
        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
        }
        
        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
        
            function updateClock() {
            var t = getTimeRemaining(endtime);
        
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
            }
        
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }
        
        var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
  }


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="coming-area pb-5">
			  <div className="coming-header text-center">
			    <a href="index.html">
			      <img src="assets/img/logo-white.png" alt="" />
			    </a>
			  </div>
			  <div className="coming-content margin-top-80 text-center pb-5">
			    <h2>We are coming soon!</h2>
			    <div id="clockdiv">
			      <div>
			        <span className="days" />
			        <div className="text">Days</div>
			      </div>
			      <div>
			        <span className="hours" />
			        <div className="text">Hours</div>
			      </div>
			      <div>
			        <span className="minutes" />
			        <div className="text">Minutes</div>
			      </div>
			      <div>
			        <span className="seconds" />
			        <div className="text">Seconds</div>
			      </div>
			    </div>
			    <h6>We are finishing work on something wonderful. Stay in touch.</h6>
			    <form>
			      <div className="form-row align-items-center justify-content-center pb-5">
			        <div className="col-10 col-md-4">
			          <div className="input-group">
			            <div className="input-group-prepend">
			              <div className="input-group-text"><i className="icon-email-subscribe" /></div>
			            </div>
			            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter your email here" />
			          </div>
			        </div>
			      </div>
			      <div className="btn-wrapper pb-5">
			        <a href="#" className="btn btn-notify">Notify me</a>
			      </div>
			    </form>
			  </div>
			  <div className="coming-footer">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-6 align-self-center">
			          <p>© Stoon 2020. Powered with <i className="fa fa-heart" /> by <a href="#">Codingeek</a>.</p>
			        </div>
			        <div className="col-md-6">
			          <ul>
			            <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
			            <li><a href="#"><i className="fa fa-twitter" /></a></li>
			            <li><a href="#"><i className="fa fa-instagram" /></a></li>
			            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default CommingSoon