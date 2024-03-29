import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import PageHeader from '../../common/page-header';

import { parallax } from '../../../utils';

export default function CTA() {
    useEffect( () => {
        document.addEventListener( "scroll", parallax );

        return () => {
            document.removeEventListener( "scroll", parallax );
        }
    }, [] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Call To Action</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Call To Action</h1>

            <div className="main">
                <PageHeader title="Call to Action" subTitle="Elements" />
                <Breadcrumb title="Call To Action" parent1={ [ "Elements", "elements" ] } />

                <div className="page-content pb-0">
                    <div className="container">
                        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> With Background</h2>

                        <div className="cta cta-horizontal cta-horizontal-box bg-image mb-5" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-1.jpg)`, backgroundPosition: `center right` } }>
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-xl-3 offset-xl-1">
                                    <h3 className="cta-title">Join Our Newsletter</h3>
                                    <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>
                                </div>

                                <div className="col-lg-8 col-xl-7">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary btn-rounded" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <hr className="mb-5" />
                        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> With Dark Background</h2>
                    </div>

                    <div className="cta bg-image bg-dark pt-6 pb-7 mb-5 bg-parallax" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-large.jpg)` } }>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-10 col-md-8 col-lg-6">
                                    <div className="cta-heading text-center">
                                        <h3 className="cta-title text-white">Join Our Newsletter</h3>
                                        <p className="cta-desc text-light">Lorem ipsum dolor sit amet adipiscing.</p>
                                    </div>

                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mb-5" />

                    <div className="container">
                        <h2 className="title text-center mb-5">Newsletter Banner <span className="title-separator">/</span> Without Background</h2>

                        <div className="cta cta-horizontal mb-3">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-xl-3 offset-xl-1">
                                    <h3 className="cta-title">Join Our Newsletter</h3>
                                    <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>
                                </div>

                                <div className="col-lg-8 col-xl-7">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary btn-rounded" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <hr className="mb-5" />

                        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> With Background</h2>
                        <div className="cta cta-separator bg-image mb-5" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-5.jpg)`, backgroundPosition: `center right` } }>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cta-wrapper cta-text text-center">
                                        <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>
                                        <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cta-wrapper text-center">
                                        <h3 className="cta-title">Join Our Newsletter</h3>
                                        <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>

                                        <form action="#">
                                            <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-3 mb-5" />

                        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> No Background</h2>
                        <div className="cta cta-separator mb-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cta-wrapper cta-text text-center">
                                        <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>
                                        <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cta-wrapper text-center">
                                        <h3 className="cta-title">Join Our Newsletter</h3>
                                        <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>

                                        <form action="#">
                                            <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-3 mb-5" />


                        <h2 className="title text-center mb-5">Call to Action <span className="title-separator">/</span> Newsletter Banner <span className="title-separator">/</span> With Background</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cta bg-image mb-3" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-3.jpg)`, backgroundPosition: `center right` } }>
                                    <div className="cta-wrapper cta-text text-center">
                                        <h3 className="cta-title">Morbi in sem quis dui placerat pellentesque felis.</h3>
                                        <p className="cta-desc">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="cta bg-image mb-3" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-4.jpg)`, backgroundPosition: `center right` } }>
                                    <div className="cta-wrapper text-center">
                                        <h3 className="cta-title">Join Our Newsletter</h3>
                                        <p className="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>

                                        <form action="#">
                                            <input type="email" className="form-control form-control-rounded" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-3 mb-5" />
                    </div>

                    <div className="container">
                        <h2 className="title text-center mb-5">Sale Banner  <span className="title-separator">/</span> With Background</h2>

                        <div className="cta cta-border mb-5">
                            <div className="row justify-content-center">
                                <div className="col-md-11 col-xl-10">
                                    <div className="cta-content">
                                        <div className="cta-heading">
                                            <h3 className="cta-title text-right">Vivamus vestibulum <br />ntulla nec ante</h3>
                                        </div>

                                        <div className="cta-text">
                                            <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                        </div>
                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mb-5" />
                        <h2 className="title text-center mb-5">Sale Banner <span className="title-separator">/</span> With Background</h2>

                        <div className="cta bg-image pt-6 pb-7 mb-5" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-2.jpg)`, backgroundPosition: `center right` } }>
                            <div className="row justify-content-center">
                                <div className="col-sm-10 col-md-8 col-lg-6">
                                    <div className="cta-text text-center">
                                        <h3 className="cta-title">Morbi in sem quis dui placerat felis.</h3>
                                        <p className="cta-desc">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>

                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mb-5" />
                        <h2 className="title text-center mb-5">Sale Banner  <span className="title-separator">/</span> With Dark Background</h2>
                    </div>

                    <div className="cta bg-image bg-dark pt-6 pb-7 bg-parallax" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-large.jpg)` } }>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-10 col-md-8 col-lg-6">
                                    <div className="cta-text text-center">
                                        <h3 className="cta-title text-white">Morbi in sem quis dui placerat felis.</h3>
                                        <p className="cta-desc text-light">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>

                                        <Link to="#" className="btn btn-primary btn-rounded"><span>Click Here</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}