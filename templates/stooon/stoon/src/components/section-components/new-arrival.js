import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewArival = () => {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="arrivals-area margin-top-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3>NEW ARRIVALS</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-01 margin-top-40">
                  <div className="thumb">
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/1.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/1.png"} alt="" /></Link>
                    </div>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /></a></li>
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
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/2.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/2.png"} alt="" /></Link>
                    </div>
                    <span className="sale">SALE! 13%</span>
                    <span className="new margin-top-35">NEW</span>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
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
                      <h6 className="title"><a href="#">Viscose-Cashmere Scarf</a></h6>
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
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/3.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/3.png"} alt="" /></Link>
                    </div>
                    <span className="new">NEW</span>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="FPlaid Cotton Oxford Shirt" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
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
                      <h6 className="title"><a href="#">FPlaid Cotton Oxford Shirt</a></h6>
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
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/4.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/4.png"} alt="" /></Link>
                    </div>
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
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
                      <h6 className="title"><a href="#">Round neck sweater</a></h6>
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
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/5.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/5.png"} alt="" /></Link>
                    </div>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
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
                    <div className="thumb-slider stone-go-top">
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/6.png"} alt="" /></Link>
                      <Link to="/product-details"><img src={publicUrl+"assets/img/arrival/6.png"} alt="" /></Link>
                    </div>
                    <ul className="cart-action">
                      <li><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> </a></li>
                      <li><a href="#"><i className="icon-heart" /></a></li>
                    </ul>
                    <span className="sale">SALE! 13%</span>
                    <div className="product-countdown clockdiv" data-countdown="2021/09/02" />
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
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="btn-wrapper text-center margin-top-55 stone-go-top">
                  <Link to="collection-full" className="btn btn-more">View more +</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default NewArival