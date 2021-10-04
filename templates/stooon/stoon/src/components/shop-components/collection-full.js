import React from 'react';
import { Link } from 'react-router-dom';
class CollectionFull = () => {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
     <div className="collection-area">
	  <div className="container">
	    <div className="row">
	      <div className="col-md-12">
	        <div className="filter">
	          <ul className="filter-main-nav">
	            <li className="filter-level-link">
	              <a className="mega-menu d-flex"><i className="fa fa-filter" /><span>Filter</span></a>
	              <div className="filter-menu-block">
	                <div className="row">
	                  <div className="col-md-3 col-lg-3 col-sm-3">
	                    <div className="widget ptype-widget border-0">
	                      <h4 className="margin-bottom-30">Product Categories</h4>
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
	                  <div className="col-md-3 col-lg-3 col-sm-3">
	                    <div className="widget color-widget border-0">
	                      <h4 className="margin-bottom-30">Color</h4>
	                      <ul className="color-list pl-0">
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                        <li><a href="#" /></li>
	                      </ul>
	                    </div>
	                  </div>
	                  <div className="col-md-3 col-lg-3 col-sm-3">
	                    <div className="widget price-widget border-0">
	                      <h4 className="margin-bottom-30">Price</h4>
	                      <form action="#">
	                        <div className="custom-control custom-checkbox mb-3">
	                          <input type="checkbox" className="custom-control-input" />
	                          <label className="custom-control-label" htmlFor="p1">$30-$60</label>
	                        </div>
	                        <div className="custom-control custom-checkbox mb-3">
	                          <input type="checkbox" className="custom-control-input" />
	                          <label className="custom-control-label" htmlFor="p2">Above $100</label>
	                        </div>
	                      </form>
	                    </div>    
	                  </div>
	                  <div className="col-md-3 col-lg-3 col-sm-3">
	                    <div className="widget size-widget border-0">
	                      <h4 className="margin-bottom-30">Size</h4>
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
	            </li>
	          </ul> 
	        </div>
	      </div>
	      <div className="col-md-8 col-5 offset-md-1">
	        <ul className="nav nav-pills shop-tab">
	          <li><a data-toggle="pill" href="#one" className="active"><i className="fa fa-th-large" /></a></li>
	          <li><a data-toggle="pill" href="#two"><i className="fa fa-bars" /></a></li>
	        </ul>
	      </div>
	      <div className="col-md-3 col-7">
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
	</div>



    )
  }
}

export default CollectionFull;
