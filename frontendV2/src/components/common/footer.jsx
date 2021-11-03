import React from 'react';
import { Link } from 'react-router-dom';

function Footer( props ) {
    const { container = "container" } = props;

    return (
        <footer className="footer footer-2">
            <div className="footer-middle">
                <div className={ container }>
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="widget widget-about">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/logo-footer.png` } className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <Link to="tel:123456789">+0123 456 789</Link>
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Payment Method</span>
                                            <figure className="footer-payments">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Useful Links</h4>

                                <ul className="widget-list">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contatc us</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li><Link to="#">Payment Methods</Link></li>
                                    <li><Link to="#">Money-back guarantee!</Link></li>
                                    <li><Link to="#">Returns</Link></li>
                                    <li><Link to="#">Shipping</Link></li>
                                    <li><Link to="#">Terms and conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-2">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Sign Up To Newsletter</h4>

                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>

                                <form action="#">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                        <div className="input-group-append">
                                            <button className="btn btn-dark" type="submit"><i className="icon-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ container }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store. All Rights Reserved.</p>
                    <ul className="footer-menu">
                        <li><Link to="#">Terms Of Use</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>
                        <a href="https://www.facebook.com" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                        <a href="https://twitter.com" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                        <a href="https://instagram.com" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                        <a href="https://youtube.com" className="social-icon social-youtube" rel="noopener noreferrer" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                        <a href="https://pinterest.com" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );