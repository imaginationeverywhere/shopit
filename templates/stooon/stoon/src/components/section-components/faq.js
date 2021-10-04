import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="faq-content margin-top-65">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-8">
		        <div className="accordion-area">
		          <h3 className="text-center">Questions and Answers</h3>
		          <div className="accordion-style" id="accordionExample1">
		            <div className="card">
		              <div className="card-header" id="headingOne">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What Shipping Methods are Available?</a>
		                </p>
		              </div>
		              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample1">
		                <div className="card-body">
		                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingTwo">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is Buying On-Line Safe?</a>
		                </p>
		              </div>
		              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample1">
		                <div className="card-body">
		                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingThree">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What Payment Methods are Accepted?</a>
		                </p>
		              </div>
		              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample1">
		                <div className="card-body">
		                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingFour">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How do I place an Order?</a>
		                </p>
		              </div>
		              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample1">
		                <div className="card-body">
		                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		                </div>
		              </div>
		            </div>
		            <div className="card">
		              <div className="card-header" id="headingFive">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Do You Ship Internationally?</a>
		                </p>
		              </div>
		              <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample1">
		                <div className="card-body">
		                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
        }
}

export default Faq