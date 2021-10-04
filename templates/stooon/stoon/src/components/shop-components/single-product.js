import React from 'react';
import { Link } from 'react-router-dom';

class SingleProduct = () => {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="collection-area margin-top-60">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-9 col-md-12">
		        <div className="row">
		          <div className="col-lg-5 col-md-6">
		            <div className="slider-tabfor margin-top-20">
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/big1.png"} alt="" />
		              </div>
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/big1.png"} alt="" />
		              </div>
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/big1.png"} alt="" />
		              </div>
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/big1.png"} alt="" />
		              </div>
		              <div className="single-item">
		                <img src={publicUrl+"assets/img/product-details/big1.png"} alt="" />
		              </div>
		            </div>
		            <div className="slider-tabnav">
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/1.png" }alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/1.png"} alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/1.png"} alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/1.png"} alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src={publicUrl+"assets/img/product-details/1.png"} alt="" />
		                </div>
		              </div>
		              <div className="single-item">
		                <div className="img">
		                  <img src="assets/img/product-details/1.png" alt="" />
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-lg-7 col-md-6">
		            <div className="content-part margin-top-20">
		              <h3 className="product-title">Faxon Canvas Low-Top Sneaker Inspired Slim Ankle Leg Jean</h3>
		              <p className="price">$90.00</p>
		              <span className="rating ml-0">
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star" />
		                <i className="fa fa-star-half-o" />
		              </span>
		              <span className="review-text">3 reviews</span>
		              <p className="specifications">SKU: <b>0014</b></p>
		              <p className="specifications">VENDOR: <b>Geek</b></p>
		              <p className="specifications">AVAILABILITY: <b className="color-green">In Stock</b></p>
		              <div className="d-flex">
		                <span className="specifications">SIZE: </span>
		                <ul className="size-list align-self-center pl-3">
		                  <li><a href="#">S</a></li>
		                  <li><a href="#">M</a></li>
		                  <li><a href="#">X</a></li>
		                  <li><a href="#">XL</a></li>
		                  <li><a href="#">XS</a></li>
		                </ul>
		              </div>
		              <div className="d-flex">
		                <span className="specifications">COLOR: </span>
		                <ul className="color-list align-self-center">
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                  <li><a href="#" /></li>
		                </ul>
		              </div>
		              <p className="specifications">MATERIAL: Cotton, Wool, Silk</p>
		              <div className="btn-wrapper d-flex">
		                <div className="input-group">
		                  <div className="input-group-prepend align-self-center">
		                    <a className="btn btn-sm" id="minus-btn"><i className="fa fa-minus" /></a>
		                  </div>
		                  <input type="number" id="qty_input" className="form-control text-right form-control-sm" defaultValue={1} min={1} />
		                  <div className="input-group-prepend align-self-center">
		                    <a className="btn btn-sm" id="plus-btn"><i className="fa fa-plus" /></a>
		                  </div>
		                </div>
		                <div className="add-to-cart-style">
		                  <a href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                </div>
		              </div>
		              <div className="btn-wrapper">
		                <a href="#" className="btn btn-buy">Buy it now</a>
		              </div>
		              <p className="specifications">CATEGORY: <b>Men, Blazer</b></p>
		              <p className="specifications">TAG: <b>Men, Blazer, Casual, Classic, Elegant</b></p>
		              <div className="d-flex">
		                <span className="specifications">SHARE:</span>
		                <ul className="social-list">
		                  <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
		                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
		                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
		                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-lg-12">
		            <div className="product-tab">
		              <ul className="nav nav-pills">
		                <li><a data-toggle="pill" href="#home" className="active">DESCRIPTION</a></li>
		                <li><a data-toggle="pill" href="#menu1">ADITIONAL INFORMATION</a></li>
		                <li><a data-toggle="pill" href="#menu2">SHIPPING</a></li>
		                <li><a data-toggle="pill" href="#menu3">WHY BUY FROM US</a></li>
		                <li><a data-toggle="pill" href="#menu4">REVIEWS</a></li>
		              </ul>
		              <div className="tab-content">
		                <div id="home" className="tab-pane fade in show active">
		                  <p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
		                  <ul className="tab-list">
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> 76% Polyester, 18% Viscose, 6% Elastane</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</a></li>
		                  </ul>
		                </div>
		                <div id="menu1" className="tab-pane fade">
		                  <p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
		                  <ul className="tab-list">
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> 76% Polyester, 18% Viscose, 6% Elastane</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</a></li>
		                  </ul>
		                </div>
		                <div id="menu2" className="tab-pane fade">
		                  <p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
		                  <ul className="tab-list">
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> 76% Polyester, 18% Viscose, 6% Elastane</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</a></li>
		                  </ul>
		                </div>
		                <div id="menu3" className="tab-pane fade">
		                  <p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
		                  <ul className="tab-list">
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> 76% Polyester, 18% Viscose, 6% Elastane</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</a></li>
		                  </ul>
		                </div>
		                <div id="menu4" className="tab-pane fade">
		                  <p>Silver, metallic-blue and metallic-lavender silk-blend jacquard, graphic pattern, pleated ruffle along collar, long sleeves with button-fastening cuffs, buckle-fastening silver skinny belt, large pleated rosettes at hips. Dry clean. Zip and hook fastening at back. 100% silk. Specialist clean</p>
		                  <ul className="tab-list">
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Lightweight soft-touch woven</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> High-rise waist</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Zip fly with hook and button fastening</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Slip pockets</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Waist belt</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Relaxed fit</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Machine wash</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> 76% Polyester, 18% Viscose, 6% Elastane</a></li>
		                    <li><a href="#"><i className="icon-right-arrow-slider" /> Our model wears a UK 8/ EU 36/ US 4 and is 174 cm/5'8.5” tall</a></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-12">
		        <div className="widget delivery-widget margin-top-20">
		          <div className="single-delivery-item">
		            <div className="d-flex">
		              <i className="icon-delivery-car" />
		              <h4>Delivery</h4>
		            </div>
		            <span>Free shipping on orders over $89.</span>
		          </div>
		          <div className="single-delivery-item">
		            <div className="d-flex">
		              <i className="icon-phone-support" />
		              <h4>Support 24/7</h4>
		            </div>
		            <span>Contact us 24 hours a day, 7 days a week.</span>
		          </div>
		          <div className="single-delivery-item">
		            <div className="d-flex">
		              <i className="icon-money-back" />
		              <h4>Return</h4>
		            </div>
		            <span>Simply return it within 30 days for an exchange.</span>
		          </div>
		        </div>
		        <div className="widget checkout-widget">
		          <h4 className="widget-title">GUARANTED SAFE CHECKOUT</h4>
		          <ul className="checkout-list">
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p1.png" }alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p2.png"} alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p3.png"} alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p4.png" }alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p5.png"} alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p6.png"} alt="" /></a></li>
		            <li><a href="#"><img src={publicUrl+"assets/img/payment/p7.png"} alt="" /></a></li>
		          </ul>
		        </div>
		        <div className="widget">
		          <a href="#"><img src={publicUrl+"assets/img/others/add1.png"} alt="" /></a>
		        </div>
		        <div className="widget seller-widget">
		          <h4 className="widget-title">Top Products</h4>
		          <div className="seller-content">
		            <div className="single-seller-content d-flex">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/seller/1.png"} alt="" />
		              </div>
		              <div className="content">
		                <h6>Men's Crew T-shirt</h6>
		                <span>$35.00</span>
		              </div>
		            </div>
		            <div className="single-seller-content d-flex">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/seller/2.png"} alt="" />
		              </div>
		              <div className="content">
		                <h6>Men's V-neck Pima</h6>
		                <span>$35.00</span>
		              </div>
		            </div>
		            <div className="single-seller-content d-flex">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/seller/3.png"} alt="" />
		              </div>
		              <div className="content">
		                <h6>Men's Crew T-shirt</h6>
		                <span>$35.00</span>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


    )
  }
}

export default SingleProduct;
