import React from 'react';
import { Link } from 'react-router-dom';

export const ProductVariant = ({ product }) => {
  return (
    <>
      {product.variants ? (
        <div className="details-filter-row details-row-size">
          <label>Color:</label>
          {product.variants[0].color ? (
            <div className="product-nav product-nav-dots">
              {product.variants.map((vari, i) => (
                <Link
                  to="#"
                  key={i}
                  className={0 === i ? 'active' : ''}
                  style={{ backgroundColor: vari.color }}
                ></Link>
              ))}
            </div>
          ) : (
            <div className="product-nav product-nav-thumbs">
              {product.variants[0].model
                ? product.variants.map((vari, i) => (
                    <Link to="#" key={i} className={0 === i ? 'active' : ''}>
                      <img src={vari.model} alt="product desc" />
                    </Link>
                  ))
                : product.variants[0].image
                ? product.variants.map((vari, i) => (
                    <Link to="#" key={i} className={0 === i ? 'active' : ''}>
                      <img src={vari.image} alt="product desc" />
                    </Link>
                  ))
                : ''}
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};
