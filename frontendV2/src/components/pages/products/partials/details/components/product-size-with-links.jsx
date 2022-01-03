import React from 'react';
import { Link } from 'react-router-dom';

export const ProductSizeWithLink = () => {
  return (
    <>
      <label>Size:</label>

      <div className="product-size">
        <Link to="#" title="Small">
          S
        </Link>
        <Link to="#" title="Medium" className="active">
          M
        </Link>
        <Link to="#" title="Large" className="disabled">
          L
        </Link>
        <Link to="#" title="Extra Large">
          XL
        </Link>
      </div>

      <Link to="#" className="size-guide">
        <i className="icon-th-list"></i>size guide
      </Link>
    </>
  );
};
