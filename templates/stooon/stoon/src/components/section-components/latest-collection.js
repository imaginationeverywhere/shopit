import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestCollection = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return  <div className="arrivals-area margin-top-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-02 text-center">
              <h6 className="mb-0">EVERYDAY ITEMS AND MORE</h6>
              <h3 className="mb-0">LATEST COLLECTION</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-pills collection-tab mt-0">
              <li className="margin-top-20"><a data-toggle="pill" href="#hot" className="active">Hot Collection</a></li>
              <li className="margin-top-20"><a data-toggle="pill" href="#best">Best Sellers</a></li>
              <li className="margin-top-20"><a data-toggle="pill" href="#sale">Sale Product</a></li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade in show active" id="hot">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/8.png"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/3.png"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Plaid Cotton Oxford Shirt</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/13.png"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <span className="new margin-top-35">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="best">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/1.png" }alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/3.png" }alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Plaid Cotton Oxford Shirt</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c1.png" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/13.png"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c2.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="sale">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/8.png"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/2.png"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                       <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/product-details">Plaid Cotton Oxford Shirt</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c3.png" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="new-price">$450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-04 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/arrival/13.png"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <h6 className="title stone-go-top"><Link to="/stone-go-top">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/img/shop/c4.png" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
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

export default LatestCollection