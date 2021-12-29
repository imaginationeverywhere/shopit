import React from "react";
import "./Skeleton.scss";
import ReactSkeleton from "react-loading-skeleton";

const Skeleton = ({ height }) => (
  <div className="skeleton">
    <ReactSkeleton height={height} />
  </div>
);

export default Skeleton;
