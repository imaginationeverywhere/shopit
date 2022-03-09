import React from 'react';
import './Skeleton.scss';
import ReactSkeleton from 'react-loading-skeleton';
const loadingGif =
  'https://res.cloudinary.com/dflmq4zxb/image/upload/v1641046969/loaderGif_um59qb.gif';

const ImageLoading = () => (
  <img className="loading-img" src={loadingGif} alt="product loading pic" />
);
const Skeleton = ({ height }) => (
  <div style={{ height }} className="skeleton">
    <ImageLoading />
  </div>
);

export default Skeleton;
