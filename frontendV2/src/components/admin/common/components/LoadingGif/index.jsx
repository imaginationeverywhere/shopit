import React from 'react';
import './LoadingGif.scss';
const loadingGif =
  'https://res.cloudinary.com/dflmq4zxb/image/upload/v1641046969/loaderGif_um59qb.gif';
const LoadingGif = () => {
  return (
    <div className="product-loading">
      <img
        className="product-loading-img"
        src={loadingGif}
        alt="product loading pic"
      />
    </div>
  );
};

export default LoadingGif;
