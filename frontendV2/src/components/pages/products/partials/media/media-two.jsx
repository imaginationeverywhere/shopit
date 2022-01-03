import React from 'react';
import { connect } from 'react-redux';
import { Magnifier } from 'react-image-magnifiers';
import OwlCarousel from '../../../../features/owl-carousel';

import { mainSlider9 } from '../../../../settings';

function MediaTwo(props) {
  const { product } = props;

  if (!product) {
    window.location = process.env.PUBLIC_URL + 'pages/404';
  }

  const bigImages = product.lgPictures ? product.lgPictures : product.pictures;

  return (
    <>
      <div className="product-lg">
        <OwlCarousel
          adClass="product-gallery-carousel owl-full owl-nav-dark cols-1 cols-md-2 cols-lg-3"
          hasChildren={product.pictures.length}
          carouselOptions={mainSlider9}
          carouselId={'galleryProduct' + product.id}
        >
          {product.pictures.map((item, index) => (
            <Magnifier
              imageSrc={product.pictures[index]}
              imageAlt="Example"
              largeImageSrc={bigImages[index]} // Optional
              dragToMove={false}
              mouseActivation="hover"
              cursorStyleActive="crosshair"
              className="product-gallery-image"
              key={'gallery-' + index}
            />
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

function mapStateToProps(state, props) {
  return {
    product: state.data.singleProduct,
  };
}

export default connect(mapStateToProps)(MediaTwo);
