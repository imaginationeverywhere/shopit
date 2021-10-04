import React from 'react';
import { Link } from 'react-router-dom';
class Collection = () => {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="collection-area margin-top-60">
		  <div className="container">
		    <div className="row flex-row-reverse">
		      <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
		        <div className="row">
		          <div className="col-lg-8 col-5">
		            <ul className="nav nav-pills shop-tab">
		              <li><a data-toggle="pill" href="#one" className="active"><i className="fa fa-th-large" /></a></li>
		              <li><a data-toggle="pill" href="#two"><i className="fa fa-bars" /></a></li>
		            </ul>
		          </div>
		          <div className="col-lg-4 col-7">
		            <form action="#">
		              <select className="form-control sort-select">
		                <option>Default sorting</option>
		                <option>Sort by popularity</option>
		                <option>Sort by average rating</option>
		                <option>Sort by latest</option>
		                <option>Sort by price: low to high</option>
		                <option>Sort by price: high to low</option>
		              </select>
		              <i className="fa fa-chevron-down" />
		            </form> 
		          </div>
		        </div>
		        <div className="tab-content">
		          <div className="tab-pane fade in show active" id="one">
		            <div className="row">

		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/1.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/2.png"} alt="" />
		                    <span className="sale">Sale! 13%</span>
		                    <span className="new margin-top-35">New</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                     <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/3.png" }alt="" />
		                    <span className="new">New</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                     <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/4.png"} alt="" />
		                    <span className="out">Sold out</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                     <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/5.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/6.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                    <span className="sale">Sale! 13%</span>
		                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
		                    </div>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                     <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/7.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                   <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/8.png"} alt="" />
		                    <span className="sale">Sale! 13%</span>
		                    <span className="new margin-top-35">New</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/9.png"} alt="" />
		                    <span className="new">New</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Round neck sweate" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweate</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/10.png"} alt="" />
		                    <span className="out">Sold out</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/11.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                     <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/12.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                    <span className="sale">Sale! 13%</span>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/13.png"} alt="" />
		                    <span className="out">Sold out</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/14.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/15.png" }alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                    <span className="sale">Sale! 13%</span>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                 	  <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/16.png"} alt="" />
		                    <span className="out">Sold out</span>
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/17.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Faxon Canvas Low-Top Sneake" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneake</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>
		              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
		                <div className="product-style-03 margin-top-40">
		                  <div className="thumb">
		                    <img src={publicUrl+"assets/img/shop/18.png"} alt="" />
		                    <ul className="cart-action">
		                      <li><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
		                      <li><a href="#"><i className="icon-heart" /></a></li>
		                    </ul>
		                    <span className="sale">Sale! 13%</span>
		                  </div>
		                  <div className="content text-center">
		                    <span className="brand">Brand: geek</span>
		                    <ul className="justify-content-center margin-bottom-20">
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    </ul>
		                   <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
		                    <div className="content-price d-flex align-self-center justify-content-center">
		                      <span className="new-price">$450.00</span>
		                    </div>
		                  </div>
		                </div>
		              </div>

		            </div>
		          </div>
		          <div className="tab-pane fade list-item" id="two">

		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/1.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                  <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                     <a className="add-to-cart-two" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/2.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                  <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                     <a className="add-to-cart-two" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/3.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                 <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                      <a className="add-to-cart-two" data-img="assets/img/shop/c3.png" data-name="Two-Tone Sleeveless Dress" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/4.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                   <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                      <a className="add-to-cart-two" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/5.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                  <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                      <a className="add-to-cart-two" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/6.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                 <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarfr</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                      <a className="add-to-cart-two" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="row product-style-03 margin-top-40">
		              <div className="col-md-4 col-sm-12 col-12">
		                <div className="thumb">
		                  <img src={publicUrl+"assets/img/shop/7.png"} alt="" />
		                </div>                                        
		              </div>
		              <div className="col-md-8 col-sm-12 col-12">
		                <div className="content">
		                    <h6 className="title stone-go-top"><Link to="/product-details">FPlaid Cotton Oxford Shirt</Link></h6>
		                  <div className="content-price d-flex align-self-center">
		                    <span className="new-price">$450.00</span>
		                  </div>
		                  <ul className="margin-bottom-10">
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                    <li><a href="#"><i className="fa fa-star-o" /></a></li>
		                  </ul>
		                  <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		                  <div className="btn-wrapper margin-top-20">
		                    <div className="add-to-cart-style">
		                      <a className="add-to-cart-two" data-img="assets/img/shop/c3.png" data-name="FPlaid Cotton Oxford Shirt" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a>
		                    </div>
		                    <div className="add-to-wishlist">
		                      <a href="#"><i className="icon-heart" /> Add to Wishlist</a>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
		            
		          </div>

		        </div>
		        <div className="row">
		          <div className="col-md-12">
		            <div className="d-flex justify-content-between pagination">
		              <h6>Showing 1 to 12 of 19 products</h6>
		              <ul>
		                <li><a href="#">1</a></li>
		                <li><a href="#">2</a></li>
		                <li><a href="#">3</a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 margin-top-20">
		        <div className="widget search-widget">
		          <form action="#">
		            <button type="submit"><i className="icon-search" /></button>
		            <input type="text" placeholder="Search brand" name="search" />
		          </form>
		        </div>
		        <div className="widget categories-widget">
		          <div className="accordion-style-2" id="accordionExample1">
		            <div className="card">
		              <div className="card-header" id="headingOne">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Categories</a>
		                </p>
		              </div>
		              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample1">
		                <div className="card-body">
		                  <form action="#">
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck">Backpacks [124]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck2">Bags [293]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck3">Boots [125]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck4">Coats [698]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck5">Dresses [12456]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck6">Flats [2654]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck7">Heels [29]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck8">Jackets [1136]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck9">Jeans [2987]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="customCheck10">Jewellery [536]</label>
		                    </div>
		                  </form>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget brand-widget">
		          <div className="accordion-style-2" id="accordionExample2">
		            <div className="card">
		              <div className="card-header" id="headingTwo">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Product Brand</a>
		                </p>
		              </div>
		              <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample2">
		                <div className="card-body">
		                  <form action="#">
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck">Geek [124]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck2">Bags [293]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck3">Boots [125]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck4">Name [698]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck5">Dresses [12456]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck6">Flats [2654]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck7">Heels [29]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck8">Jackets [1136]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck9">Jeans [2987]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="pcustomCheck10">Jewellery [536]</label>
		                    </div>
		                  </form>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget ptype-widget">
		          <div className="accordion-style-2" id="accordionExample3">
		            <div className="card">
		              <div className="card-header" id="headingThree">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Product Type</a>
		                </p>
		              </div>
		              <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample3">
		                <div className="card-body">
		                  <form action="#">
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="tcustomCheck9">Boys [203]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="tcustomCheck10">Girls [87]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="tcustomCheck11">Men [2869]</label>
		                    </div>
		                    <div className="custom-control custom-checkbox mb-3">
		                      <input type="checkbox" className="custom-control-input" />
		                      <label className="custom-control-label" htmlFor="tcustomCheck12">Women [1387]</label>
		                    </div>
		                  </form>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget price-widget">
		          <div className="accordion-style-2" id="accordionExample4">
		            <div className="card">
		              <div className="card-header" id="headingFour">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Filter by price</a>
		                </p>
		              </div>
		              <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordionExample4">
		                <div className="price_filter">
		                  <div className="price_slider_amount">
		                    <input type="submit" defaultValue="Price:" /> 
		                    <input type="text" id="amount" name="price" /> 
		                  </div>
		                  <div id="slider-range" />
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget color-widget">
		          <div className="accordion-style-2" id="accordionExample5">
		            <div className="card">
		              <div className="card-header" id="headingFive">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">Color</a>
		                </p>
		              </div>
		              <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#accordionExample5">
		                <ul className="color-list">
		                  <li title="Blue"><a href="#" /></li>
		                  <li title="Black"><a href="#" /></li>
		                  <li title="Color"><a href="#" /></li>
		                  <li title="Color"><a href="#" /></li>
		                  <li title="Color"><a href="#" /></li>
		                  <li title="Color"><a href="#" /></li>
		                  <li title="Color"><a href="#" /></li>
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget size-widget">
		          <div className="accordion-style-2" id="accordionExample6">
		            <div className="card">
		              <div className="card-header" id="headingSix">
		                <p className="mb-0">
		                  <a href="#" role="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">Size</a>
		                </p>
		              </div>
		              <div id="collapseSix" className="collapse show" aria-labelledby="headingSix" data-parent="#accordionExample6">
		                <div className="card-body">
		                  <ul className="size-list">
		                    <li><a href="#">38</a></li>
		                    <li><a href="#">39</a></li>
		                    <li><a href="#">40</a></li>
		                    <li><a href="#">41</a></li>
		                    <li><a href="#">42</a></li>
		                    <li><a href="#">43</a></li>
		                    <li><a href="#">S</a></li>
		                    <li><a href="#">M</a></li>
		                    <li><a href="#">X</a></li>
		                    <li><a href="#">XL</a></li>
		                  </ul>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="widget seller-widget">
		          <h4 className="widget-title">Best sellers</h4>
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
		        <div className="widget">
		          <a href="#"><img src={publicUrl+"assets/img/others/add1.png"} alt="" /></a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>



    )
  }
}

export default Collection;
