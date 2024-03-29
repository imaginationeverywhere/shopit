import React from 'react';
import { Link } from 'react-router-dom';

// import utils
import { safeContent, isIEBrowser } from '../../utils';

export default function IntroSlide ( props ) {
    const { image, srcSet, subtitle, title, text, btnText = "SHOP NOW" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <figure className="slide-image">
                <picture style={ isIEBrowser() ? { height: '100%' } : {} }>
                    <source media="(max-width: 480px)" srcSet={ process.env.PUBLIC_URL + srcSet } />

                    <img src={ process.env.PUBLIC_URL + image } alt="desc" style={ isIEBrowser() ? { height: '100%' } : {} } width="1168" height="499" />
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle">{ subtitle }</h3>

                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) }></h1>

                <div className='intro-price text-white'>{ text }</div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-white-primary btn-round">
                    <span>{ btnText }</span>

                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}