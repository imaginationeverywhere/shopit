import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class LatestArticleV3 = () => {



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="article-area stone-go-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-02">
              <h3 className="margin-bottom-40">LATEST BLOG</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="article-style-03">
              <div className="thumb">
                <img src={publicUrl+"assets/img/blog/1.png"} alt="" />
              </div>
              <div className="content">
                <span className="date">June 24, 2020</span>
                <h3><Link to="/blog-details">Never putting your Cocktail down to leave</Link></h3>
                <p>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
                <div className="btn-wrapper">
                  <Link to="/blog-details" className="btn">Read more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="article-style-03">
              <div className="thumb">
                <img src={publicUrl+"assets/img/blog/2.png"} alt="" />
              </div>
              <div className="content">
                <span className="date">June 24, 2020</span>
                <h3><Link to="/blog-details">7 Things You Can’t Wear After Labor Day Read</Link></h3>
                <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga</p>
                <div className="btn-wrapper">
                  <Link to="/blog-details" className="btn">Read more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="article-style-03">
              <div className="thumb">
                <img src={publicUrl+"assets/img/blog/3.png" }alt="" />
              </div>
              <div className="content">
                <span className="date">June 24, 2020</span>
                <h3><Link to="/blog-details">Never putting your Cocktail down to leave</Link></h3>
                <p>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
                <div className="btn-wrapper">
                  <Link to="/blog-details" className="btn">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



        }
}

export default LatestArticleV3