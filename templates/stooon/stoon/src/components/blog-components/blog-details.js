import React from "react";
// import { Link } from 'react-router-dom';
// import Comments from './comments';

const BlogDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  //   let imagealt = 'image';

  return (
    <div className="blog-area margin-top-65">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="blog-content">
              <h2>
                Why must they do that use lap as chair so hide when guests come
                over hide when guests come over. Hopped up on goofballs, hide
                when guests come over.
              </h2>
              <p>
                The Christmas countdown is officially on! And how do we know?
                Because the Marks &amp; Spencer Christmas advert has just hit
                screen. And the star is a certain Holly Willoughby – and her
                enviable wardrobe. We can’t stop thinking about the fabulous
                purple coat that she wears during the ad – which is FINALLY
                available to purchase now.
                <br />
                <br /> Although it was released in store earlier this month, you
                can now purchase it online for £89. The single-breasted design
                has already proved a massive hit on Instagram, due to not only
                the gorgeous wide lapels, the on-trend, oversize fit and super
                cosy wool texture – but also the fact that Vogue Williams, Holly
                and fashion blogger Erica Davies have all rocked it. Now if you
                don’t know who Erica Davies is – let us enlighten you. Erica is
                a huge fashion influencer and has always been a big fan of
                M&amp;S, having single-handedly made THAT starry-print
                constellation dress a sellout last year.
                <br />
                <br /> Speaking about how to style the purple coat of dreams,
                the chic mother-of-two advised: “Do not fear the purple hue. It
                works SO WELL with navy blue, bright yellow (yes really), orange
                or red AND emerald green. It’s a completely useful shade if you
                want to inject some colour into your life. And who doesn’t want
                that? We couldn’t agree more.
              </p>
              <img src={publicUrl + "assets/img/blog/4.png"} alt="" />
              <p>
                When, while the lovely valley teems with vapour around me, and
                the meridian sun strikes the upper surface of the impenetrable
                foliage of my trees, and but a few stray gleams steal into the
                inner sanctuary, I throw myself down among the tall grass by the
                trickling stream; and, as I lie close to the earth, a thousand
                unknown plants are noticed by me.
              </p>
              <h2>Dare to dream big</h2>
              <p>
                The Christmas countdown is officially on! And how do we know?
                Because the Marks &amp; Spencer Christmas advert has just hit
                screen. And the star is a certain Holly Willoughby – and her
                enviable wardrobe. We can’t stop thinking about the fabulous
                purple coat that she wears during the ad – which is FINALLY
                available to purchase now.
                <br />
                <br /> Although it was released in store earlier this month, you
                can now purchase it online for £89. The single-breasted design
                has already proved a massive hit on Instagram, due to not only
                the gorgeous wide lapels, the on-trend, oversize fit and super
                cosy wool texture – but also the fact that Vogue Williams, Holly
                and fashion blogger Erica Davies have all rocked it. Now if you
                don’t know who Erica Davies is – let us enlighten you. Erica is
                a huge fashion influencer and has always been a big fan of
                M&amp;S, having single-handedly made THAT starry-print
                constellation dress a sellout last year.
                <br />
                <br /> Speaking about how to style the purple coat of dreams,
                the chic mother-of-two advised: “Do not fear the purple hue. It
                works SO WELL with navy blue, bright yellow (yes really), orange
                or red AND emerald green. It’s a completely useful shade if you
                want to inject some colour into your life. And who doesn’t want
                that? We couldn’t agree more.
              </p>
              <div className="author-social-area margin-top-50">
                <div className="post-taglist">
                  <ul>
                    <li>
                      <a href="#">artical</a>
                    </li>
                    <li>
                      <a href="#">magazine</a>
                    </li>
                    <li>
                      <a href="#">lifestyle</a>
                    </li>
                    <li>
                      <a href="#">responsive</a>
                    </li>
                  </ul>
                </div>
                <div className="author-social-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-thumbs-o-up" /> Like{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f" /> Share{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" /> Tweet{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" /> Tweet{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="user-comment">
                <div className="d-flex">
                  <div className="thumb mt-3">
                    <img src={publicUrl + "assets/img/blog/5.png"} alt="" />
                  </div>
                  <div className="content mt-3">
                    <h4 className="name">Published by Jeremy Harville</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor incidide ut labore dolore. incididunt ut
                      labore et dolore. Neque turpis vitae eros praesent varius.
                      Egestas a congue augue egestas volutpat egestas magna
                      suscipit egestas magna ipsum vitae urna blandit vitae
                      massa placerat vulputate et magnis sapien
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="read-more-area">
                <span>Read More</span>
                <a href="#">
                  The Versatile Flat Shoe Style That’s Probably Missing From
                  Your Wardrobe
                </a>
                <a href="#">
                  I’m Happy This Comfortable Trend Is Still Going to Be Cool in
                  2019
                </a>
              </div>
              <div className="prev-next-post margin-top-50">
                <div className="d-md-flex">
                  <div className="prev-post">
                    <a href="#">
                      <i className="fa fa-angle-left" aria-hidden="true" />{" "}
                      Previous Post
                    </a>
                    <h6>
                      The Versatile Flat Shoe Style That’s Probably Missing From
                      Your Wardrobe
                    </h6>
                  </div>
                  <div className="next-post">
                    <a href="#">
                      Next Post{" "}
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </a>
                    <h6>
                      I’m Happy This Comfortable Trend Is Still Going to Be Cool
                      in 2020
                    </h6>
                  </div>
                </div>
              </div>
              <div
                id="comments"
                className="comments-area comments-area-wrapper"
              >
                <h4 className="comments-title">Comment</h4>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img
                            alt=""
                            src={publicUrl + "assets/img/blog/6.png"}
                            className="avatar"
                          />
                        </div>
                        <div className="desc">
                          <div className="d-flex justify-content-between comment_title">
                            <h5>Christopher F. Perry</h5>
                            <a href>
                              <i className="fa fa-share-square-o" /> Reply
                            </a>
                          </div>
                          <div className="comment-content">
                            <p>
                              Sausage ribeye porchetta sirloin shank, pork belly
                              kielbasa. Picanha brisket tenderloin sirloin
                              prosciutto corned beef shank. Porchetta sirloin
                              shank, pork belly kielbasa.
                            </p>
                          </div>
                          <span className="date">May 1, 2019 at 6:36 am</span>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="single-comment justify-content-between d-flex">
                          <div className="user justify-content-between d-flex">
                            <div className="thumb">
                              <img
                                alt=""
                                src={publicUrl + "assets/img/blog/7.png"}
                                className="avatar"
                              />
                            </div>
                            <div className="desc">
                              <div className="d-flex justify-content-between comment_title">
                                <h5>Sally Greer</h5>
                                <a href>
                                  <i className="fa fa-share-square-o" /> Reply
                                </a>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Sausage ribeye porchetta sirloin shank, pork
                                  belly kielbasa. Picanha brisket tenderloin
                                  sirloin prosciutto corned beef shank.
                                </p>
                              </div>
                              <span className="date">
                                May 1, 2019 at 6:36 am
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img
                            alt=""
                            src={publicUrl + "assets/img/blog/8.png"}
                            className="avatar"
                          />
                        </div>
                        <div className="desc">
                          <div className="d-flex justify-content-between comment_title">
                            <h5>Jhon Rozario</h5>
                            <a href>
                              <i className="fa fa-share-square-o" /> Reply
                            </a>
                          </div>
                          <div className="comment-content">
                            <p>
                              Sausage ribeye porchetta sirloin shank, pork belly
                              kielbasa. Picanha brisket tenderloin sirloin
                              prosciutto corned beef shank.
                            </p>
                          </div>
                          <span className="date">May 1, 2019 at 6:36 am</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* reply-area start  */}
              <div className="reply-area">
                <h5 className="text-uppercase">LEAVE A REPLY</h5>
                <span>
                  Your email address will not be published. Required fields are
                  marked *
                </span>
                <form>
                  <div className="form-row margin-bottom-10">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="form-group margin-bottom-10">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-check margin-top-30">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-submit text-uppercase"
                  >
                    Post a comment
                  </button>
                </form>
              </div>
              {/* reply-area end  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
