import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewArivalV3 = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="tranding-area margin-top-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title-02">
                <h3>NEW ARRIVALS</h3>
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="nav nav-pills arrival-tab">
                <li><a data-toggle="pill" href="#one" className="active">NEW IN</a></li>
                <li><a data-toggle="pill" href="#two">MEN</a></li>
                <li><a data-toggle="pill" href="#three">WOMEN</a></li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade in show active" id="one">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/7.png"} alt="" /></Link>
                      <span className="out">SOLD OUT</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="old-price mr-2">$400.00</span>
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/8.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/9.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <span className="new margin-top-35">NEW</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/10.png"} alt="" /></Link>
                      <span className="new">NEW</span>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/11.png"} alt="" /></Link>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/12.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="two">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/10.png"} alt="" /></Link>
                      <span className="new">NEW</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/11.png"} alt="" /></Link>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /></a>></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                     <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/12.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/7.png"} alt="" /></Link>
                      <span className="out">SOLD OUT</span>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/8.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/9.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <span className="new margin-top-35">NEW</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="three">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/7.png"} alt="" /></Link>
                      <span className="out">SOLD OUT</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/8.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/9.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <span className="new margin-top-35">NEW</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/10.png"} alt="" /></Link>
                      <span className="new">NEW</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/11.png"} alt="" /></Link>
                      <ul className="cart-action-02">
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-style-01 margin-top-40">
                    <div className="thumb">
                       <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/12.png"} alt="" /></Link>
                      <span className="sale">SALE 13%</span>
                      <ul className="cart-action-02">
                        <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                        <li><a className="add-to-cart-v2" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
                        <li><a href="#"><i className="icon-heart" /></a></li>
                      </ul>
                    </div>
                    <div className="content text-center">
                      <div className="content-hover d-flex justify-content-between">
                        <ul className="product-color">
                          <li><a href="#"><span className="blue" /></a></li>
                          <li><a href="#"><span className="red" /></a></li>
                          <li><a href="#"><span className="pest" /></a></li>
                          <li><a href="#"><span className="yellow" /></a></li>
                          <li><a href="#"><span className="ass" /></a></li>
                        </ul>
                        <ul className="product-size">
                          <li><a href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                        </ul>
                      </div>
                      <div className="content-bottom">
                        <span className="brand">BRAND:GEEK</span>
                        <ul className="justify-content-center margin-bottom-20">
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                          <li><a href="#"><i className="fa fa-star-o" /></a></li>
                        </ul>
                        <h6 className="title"><a href="#">Faxon Canvas Low-Top Sneaker</a></h6>
                        <div className="content-price d-flex align-self-center justify-content-center">
                          <span className="new-price">$450.00</span>
                        </div>
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

export default NewArivalV3