import React from 'react';
import { Link } from 'react-router-dom';

function Footer ( props ) {
    const { logoFooter = "assets/images/home/logo-footer.png" } = props;
    const { container = "container" } = props;

    return (
        <footer className="footer footer-dark">
            <div className="footer-middle">
                <div className={ container }>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="widget widget-about">
                                <img src={ process.env.PUBLIC_URL + '/' + logoFooter } className="footer-logo" alt="Footer Logo" width="100" height="25" />
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                                <div className="social-icons">
                                    <Link to={ 'https://www.facebook.com/' } className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                                    <Link to={ 'https://twitter.com/' } className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                                    <Link to={ 'https://instagram.com/' } className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                                    <Link to={ 'https://youtube.com/' } className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
                                    <Link to={ 'https://pinterest.com/' } className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">Useful Links</h4>

                                <ul className="widget-list">
                                    <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
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

                        <div className="col-sm-6 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li><Link to="#">Sign In</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ container }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } Molla Store. All Rights Reserved.</p>
                    <figure className="footer-payments">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                    </figure>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );