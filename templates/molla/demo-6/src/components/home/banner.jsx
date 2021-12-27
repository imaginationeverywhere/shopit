import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//import utils
import { safeContent } from "../../utils";

export default function Banner(props) {
  const {
    img,
    subtitle,
    width = "400",
    height = "400",
    title,
    btnText = "Shop Now",
  } = props.banner;

  return (
    <div className="banner banner-overlay">
      <Link to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}>
        <div className="lazy-overlay bg-2"></div>

        <LazyLoadImage
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt="Banner"
          width={width + "px"}
          height={height + "px"}
          effect="blur"
        />
      </Link>

      <div className="banner-content banner-content-center">
        <h4 className="banner-subtitle text-white">
          <Link to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}>
            {subtitle}
          </Link>
        </h4>

        <h3 className="banner-title text-white">
          <Link to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}>
            <span dangerouslySetInnerHTML={safeContent(title)}></span>
          </Link>
        </h3>

        <Link
          to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
          className="btn btn-outline-white banner-link underline"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}
