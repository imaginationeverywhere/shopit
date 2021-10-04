import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Team = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="team-area padding-top-80 margin-top-80 padding-bottom-80">
		  <div className="container">
		    <div className="row">
		      <div className="col-md-12">
		        <div className="section-title text-center">
		          <h3>Professional Experts</h3>
		        </div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-md-12">
		        <div className="team-slider">
		          <div className="single-team-item">
		            <div className="thumb">
		              <img className="rounded-circle" src={publicUrl+"assets/img/team/1.png"} alt="" />
		            </div>
		            <div className="content">
		              <h4 className="title">Suddenlypsychic</h4>
		              <span className="designation">Software Developer</span>
		              <ul className="team-social">
		                <li><a href="#"><i className="icon-facebook" /></a></li>
		                <li><a href="#"><i className="icon-instagram" /></a></li>
		                <li><a href="#"><i className="icon-twitter" /></a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="single-team-item">
		            <div className="thumb">
		              <img className="rounded-circle" src={publicUrl+"assets/img/team/2.png"} alt="" />
		            </div>
		            <div className="content">
		              <h4 className="title">Suddenlypsychic</h4>
		              <span className="designation">Software Developer</span>
		              <ul className="team-social">
		                <li><a href="#"><i className="icon-facebook" /></a></li>
		                <li><a href="#"><i className="icon-instagram" /></a></li>
		                <li><a href="#"><i className="icon-twitter" /></a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="single-team-item">
		            <div className="thumb">
		              <img className="rounded-circle" src={publicUrl+"assets/img/team/3.png"} alt="" />
		            </div>
		            <div className="content">
		              <h4 className="title">Pete Castiglione</h4>
		              <span className="designation">CEO &amp; Founder</span>
		              <ul className="team-social">
		                <li><a href="#"><i className="icon-facebook" /></a></li>
		                <li><a href="#"><i className="icon-instagram" /></a></li>
		                <li><a href="#"><i className="icon-twitter" /></a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="single-team-item">
		            <div className="thumb">
		              <img className="rounded-circle" src={publicUrl+"assets/img/team/4.png" }alt="" />
		            </div>
		            <div className="content">
		              <h4 className="title">Suddenlypsychic</h4>
		              <span className="designation">Software Developer</span>
		              <ul className="team-social">
		                <li><a href="#"><i className="icon-facebook" /></a></li>
		                <li><a href="#"><i className="icon-instagram" /></a></li>
		                <li><a href="#"><i className="icon-twitter" /></a></li>
		              </ul>
		            </div>
		          </div>
		          <div className="single-team-item">
		            <div className="thumb">
		              <img className="rounded-circle" src={publicUrl+"assets/img/team/1.png"} alt="" />
		            </div>
		            <div className="content">
		              <h4 className="title">Sam Robinson</h4>
		              <span className="designation">Creative Director</span>
		              <ul className="team-social">
		                <li><a href="#"><i className="icon-facebook" /></a></li>
		                <li><a href="#"><i className="icon-instagram" /></a></li>
		                <li><a href="#"><i className="icon-twitter" /></a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default Team