import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategoryOne(props) {
  const { image, category, count, type } = props;

  return (
    <div className="banner banner-cat">
      <Link to="#">
        <img src={process.env.PUBLIC_URL + '/' + image} alt="Banner" />
      </Link>

      <div className={`banner-content ${type}`}>
        <h3 className="banner-title">{category}</h3>
        <h4 className="banner-subtitle">{count} Products</h4>
        <Link to="#" className="banner-link">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default React.memo(ProductCategoryOne);
