import React from 'react';
import { Link } from 'react-router-dom';
class RelatedProduct = () => {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="related-product-section">
		  <div className="container">
		    <div className="related-product">
		      <div className="row">
		        <div className="col-lg-12">
		          <div className="title">
		            <h2>RELATED PRODUCTS</h2>
		          </div>
		        </div>
		      </div>
		      <div className="row">
		        <div className="col-lg-12">
		          <div className="related-slider">
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/3.png"} alt="" />
		                <span className="sale">Sale! 13%</span>
		                <span className="new margin-top-35">New</span>
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
		                <span className="price">$400.00</span>
		              </div>
		            </div>
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/9.png" }alt="" />
		                <span className="new">New</span>
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
		                <span className="price">$400.00</span>
		              </div>
		            </div>
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/5.png" }alt="" />
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
		                <span className="price">$400.00</span>
		              </div>
		            </div>
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/4.png"} alt="" />
		                <span className="new">New</span>
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
		                <span className="price">$400.00</span>
		              </div>
		            </div>
		            <div className="product-style-03 margin-top-30">
		              <div className="thumb text-center">
		                <img src={publicUrl+"assets/img/shop/12.png"} alt="" />
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
		                <span className="price">$400.00</span>
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

export default RelatedProduct;
