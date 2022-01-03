import React from 'react';

export const ProductPrice = ({ product }) => {
  return (
    <>
      {0 === product.stock ? (
        <div className="product-price">
          <span className="out-price">
            $
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      ) : 0 < product.discount ? (
        <div className="product-price">
          <span className="new-price">
            $
            {product.salePrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <span className="old-price">
            $
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      ) : (
        <div className="product-price">
          $
          {product.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      )}
    </>
  );
};
