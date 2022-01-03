import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductPrice, ProductSize, ProductVariant } from './components';

import { addToCart, toggleWishlist } from 'actions';

import { quantityInputs, isIEBrowser, isEdgeBrowser, findIndex } from 'utils';

function ProductDetailOne(props) {
  const { product, isWishlist, type, addToCart, toggleWishlist } = props;

  useEffect(() => {
    quantityInputs();
  }, []);

  const addToCartHandler = () => {
    if (0 !== product.stock)
      addToCart(product, document.querySelector('#qty').value);
  };

  const wishlistHandler = () => {
    if (isWishlist) {
      window.location = process.env.PUBLIC_URL + '/shop/wishlist';
    } else {
      toggleWishlist(product, isWishlist);
    }
  };

  return (
    <div className={'product-details'}>
      <h1 className="product-title">{product.name}</h1>

      <div className="ratings-container">
        <div className="ratings">
          <div
            className="ratings-val"
            style={{ width: product.ratings * 20 + '%' }}
          ></div>
        </div>
        <Link
          className="ratings-text"
          to="#product-review-link"
          id="review-link"
        >
          ( {product.reviews} Reviews )
        </Link>
      </div>

      <ProductPrice product={product} />

      <div className="product-content">
        <p>{product.shortDesc}</p>
      </div>

      <ProductVariant product={product} />

      <div className="details-filter-row details-row-size">
        <ProductSize product={product} />

        {'default' === type ? (
          <Link to="#" className="size-guide">
            <i className="icon-th-list"></i>size guide
          </Link>
        ) : (
          ''
        )}
      </div>

      <div className="details-filter-row details-row-size">
        <label htmlFor="qty">Qty:</label>
        <div className="product-details-quantity">
          <input
            type="number"
            id="qty"
            className="form-control"
            defaultValue="1"
            min="1"
            max={product.stock}
            step="1"
            data-decimals="0"
            required
          />
        </div>
      </div>

      <div className="product-details-action">
        {isIEBrowser() || isEdgeBrowser() ? (
          <button
            className="btn-product btn-cart"
            onClick={addToCartHandler}
            style={{ minHeight: '4rem' }}
          >
            <span>add to cart</span>
          </button>
        ) : (
          <button className="btn-product btn-cart" onClick={addToCartHandler}>
            <span>add to cart</span>
          </button>
        )}
        {isIEBrowser() || isEdgeBrowser() ? (
          <div className="details-action-wrapper IE-detail-action-wrapper">
            <button
              className={`btn-product btn-wishlist pl-0 pr-0 ${
                isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'
              }`}
              onClick={wishlistHandler}
              title={isWishlist ? 'Go to wishlist' : 'Add to wishlist'}
            >
              <span>{isWishlist ? 'go to wishlist' : 'add to wishlist'}</span>
            </button>
          </div>
        ) : (
          <div className="details-action-wrapper">
            <button
              className={`btn-product btn-wishlist pl-0 pr-0 ${
                isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'
              }`}
              onClick={wishlistHandler}
              title={isWishlist ? 'Go to wishlist' : 'Add to wishlist'}
            >
              <span>{isWishlist ? 'Go to Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>
        )}
      </div>

      <div className="product-details-footer">
        <div className="product-cat">
          <span>Category: </span>
          {product.category.map((cat, index) => (
            <span key={index} className="mr-0">
              <Link to="#">{cat}</Link>
              {index < product.category.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        <div className="social-icons social-icons-sm">
          <span className="social-label">Share:</span>
          <Link to="#" className="social-icon" title="Facebook" target="_blank">
            <i className="icon-facebook-f"></i>
          </Link>
          <Link to="#" className="social-icon" title="Twitter" target="_blank">
            <i className="icon-twitter"></i>
          </Link>
          <Link
            to="#"
            className="social-icon"
            title="Instagram"
            target="_blank"
          >
            <i className="icon-instagram"></i>
          </Link>
          <Link
            to="#"
            className="social-icon"
            title="Pinterest"
            target="_blank"
          >
            <i className="icon-pinterest"></i>
          </Link>
        </div>
      </div>

      {props.children}
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    product: state.data.products.filter(
      (product) => product.id === props.id,
    )[0],
    isWishlist:
      findIndex(state.wishlist.list, (item) => item.id === props.id) !== -1
        ? true
        : false,
  };
}

export default connect(mapStateToProps, { addToCart, toggleWishlist })(
  ProductDetailOne,
);
