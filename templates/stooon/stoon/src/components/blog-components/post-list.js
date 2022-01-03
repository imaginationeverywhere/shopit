import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  //   let imagealt = 'image';

  return (
    <div className="collection-area margin-top-60 stone-go-top">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9 col-md-12 margin-top-20">
            <div className="row">
              <div className="col-md-12">
                <div className="single-blog">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/blog/10.png'} alt="" />
                    <span className="tag">lifestyle</span>
                  </div>
                  <div className="content">
                    <span className="date">June 24, 2020</span>
                    <h2>
                      <Link to="/blog-details">
                        7 Things You Can’t Wear After Labor Day Read
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/blog-details" className="btn btn-read">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-blog">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/blog/11.png'} alt="" />
                    <span className="tag">lifestyle</span>
                  </div>
                  <div className="content">
                    <span className="date">June 24, 2020</span>
                    <h2>
                      <Link to="/blog-details">
                        7 Things You Can’t Wear After Labor Day Read
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/blog-details" className="btn btn-read">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-blog">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/blog/12.png'} alt="" />
                    <span className="tag">lifestyle</span>
                  </div>
                  <div className="content">
                    <span className="date">June 24, 2020</span>
                    <h2>
                      <Link to="/blog-details">
                        7 Things You Can’t Wear After Labor Day Read
                      </Link>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/blog-details" className="btn btn-read">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-center pagination border-0 mt-0">
                  <ul>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="post-widget margin-top-20">
              <h4 className="widget-title2">Recent Posts</h4>
              <div className="post-content">
                <div className="single-post-item">
                  <h6>
                    <Link to="/blog-details">Lorem ipsum dolor sit amet</Link>
                  </h6>
                  <span>August 08, 2020</span>
                </div>
                <div className="single-post-item">
                  <h6>
                    <Link to="/blog-details">You can’t wear after read</Link>
                  </h6>
                  <span>August 08, 2020</span>
                </div>
                <div className="single-post-item">
                  <h6>
                    <Link to="/blog-details">Lorem ipsum dolor sit amet</Link>
                  </h6>
                  <span>August 08, 2020</span>
                </div>
                <div className="single-post-item">
                  <h6>
                    <Link to="/blog-details">You can’t wear after read</Link>
                  </h6>
                  <span>August 08, 2020</span>
                </div>
              </div>
            </div>
            <div className="about-widget margin-top-20">
              <h4 className="widget-title2">About</h4>
              <div className="about-content">
                <h6>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </h6>
                <Link href="#" className="btn">
                  Read more
                </Link>
              </div>
            </div>
            <div className="tag-widget margin-top-20">
              <h4 className="widget-title2">Tags</h4>
              <div className="tag-content">
                <ul>
                  <li>
                    <Link to="/blog-details">Crafts</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Design</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Fashion</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Homemade</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Ideas</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Art</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Newtork</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Lifestyle</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Social</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="banner margin-top-20">
              <Link to="/">
                <img src={publicUrl + 'assets/img/others/add1.png'} alt="" />
              </Link>
            </div>
            <div className="seller-widget margin-top-20">
              <h4 className="widget-title">Best sellers</h4>
              <div className="seller-content">
                <div className="single-seller-content d-flex">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/seller/1.png'} alt="" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/product-details">Men's Crew T-shirt</Link>
                    </h6>
                    <span>$35.00</span>
                  </div>
                </div>
                <div className="single-seller-content d-flex">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/seller/2.png'} alt="" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/product-details">Men's V-neck Pima</Link>
                    </h6>
                    <span>$35.00</span>
                  </div>
                </div>
                <div className="single-seller-content d-flex">
                  <div className="thumb">
                    <img src={publicUrl + 'assets/img/seller/3.png'} alt="" />
                  </div>
                  <div className="content">
                    <h6>
                      <Link to="/product-details">Men's Crew T-shirt</Link>
                    </h6>
                    <span>$35.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
