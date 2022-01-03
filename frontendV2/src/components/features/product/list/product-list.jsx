/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import ProductSix from '../product-six';
import ProductEight from '../product-eight';
import QuickView from '../common/quickview';
import Pagination from '../../NewPagination';

import {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
  filterSort,
  getAllProductsWithFilters,
} from '../../../../actions';
import { getVisibleProducts, processFilters } from '../../../../services';
import store from '../../../../store';
import filter from '../../../../reducers/filter';

function ProductList(props) {
  let {
    column,
    filterSort,
    products,
    filters,
    addToCart,
    toggleWishlist,
    addToCompare,
    showQuickViewModal,
    productsInfo,
    productLoading,
  } = props;

  const productLength = productsInfo?.filteredProductsCount || products.length;
  const [page, setPage] = useState(1);
  const [cols, setCols] = useState(column);

  const getProducts = () =>
    store.dispatch(
      getAllProductsWithFilters({
        ...processFilters({ page, pageSize: 4, ...filters }),
      }),
    );

  useEffect(() => {
    document
      .querySelector('.skeleton-body.skel-shop-products')
      .classList.remove('loaded');
    document
      .querySelector('.skeleton-body.skel-shop-sidebar')
      .classList.remove('loaded');

    let imgLoad = imagesLoaded('.products', { background: true });

    imgLoad.on('done', function(instance, image) {
      !productLoading &&
        document
          .querySelector('.skeleton-body.skel-shop-products')
          .classList.add('loaded');
      !productLoading &&
        document
          .querySelector('.skeleton-body.skel-shop-sidebar')
          .classList.add('loaded');
    });

    setCols(column);
  }, [cols, column]);

  useEffect(() => {
    document
      .querySelector('.skeleton-body.skel-shop-products')
      .classList.remove('loaded');

    let imgLoad = imagesLoaded('.products', { background: true });

    imgLoad.on('done', function(instance, image) {
      !productLoading &&
        document
          .querySelector('.skeleton-body.skel-shop-products')
          .classList.add('loaded');
    });
  }, [filters]);

  useEffect(() => {
    if (productLoading) {
      document
        .querySelector('.skeleton-body.skel-shop-products')
        ?.classList.remove('loaded');
      document
        .querySelector('.skeleton-body.skel-shop-sidebar')
        ?.classList.remove('loaded');
    } else {
      console.log('here');
      document
        .querySelector('.skeleton-body.skel-shop-products')
        ?.classList.add('loaded');
      document
        .querySelector('.skeleton-body.skel-shop-sidebar')
        ?.classList.add('loaded');
    }
  }, [productLoading]);

  function changePos(pos) {
    setPage(pos);
    if (page !== pos)
      document
        .querySelector('.skeleton-body.skel-shop-products')
        ?.classList.remove('loaded');

    // let imgLoad = imagesLoaded('.products', { background: true });

    // imgLoad.on('done', function(instance, image) {
    //   !productLoading &&
    //     document
    //       .querySelector('.skeleton-body.skel-shop-products')
    //       ?.classList.add('loaded');
    // });

    window.scrollTo({
      top: 0,
    });
  }

  function changeFilter(e) {
    filterSort(e.target.value);
    setPage(0);
  }

  const grid = {
    '2cols': 'col-6',
    '3cols': 'col-6 col-md-4 col-lg-4',
    '4cols': 'col-6 col-md-4 col-lg-4 col-xl-3',
  };
  // const units = { list: 6, '2cols': 6, '3cols': 9, '4cols': 12 };
  // const itemsPerPage = units[cols];
  // products = getVisibleProducts(products, filters);

  useEffect(() => {
    if (page) getProducts();
  }, [page]);

  return (
    <>
      <div className="toolbox">
        <div className="toolbox-left">
          <div className="toolbox-info">
            Showing{' '}
            <span>
              {products?.length} of {productLength}
            </span>{' '}
            Products
          </div>
        </div>

        <div className="toolbox-right">
          <div className="toolbox-sort">
            <label htmlFor="sortby">Sort by:</label>
            <div className="select-custom">
              <select
                name="sortby"
                id="sortby"
                defaultValue={filters.sortBy}
                className="form-control"
                onChange={changeFilter}
              >
                <option value="createdAt">Date</option>
                <option value="price">Price</option>
                <option value="stock">Quantity</option>
                <option value="rating">Most Rated</option>
              </select>
            </div>
          </div>

          <div className="toolbox-layout">
            <Link to={process.env.PUBLIC_URL + '/shop/sidebar/list'}>
              <button
                className={`btn-layout ${'list' === cols ? 'active' : ''}`}
              >
                <svg width="16" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="10" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="10" height="4"></rect>
                </svg>
              </button>
            </Link>

            <Link to={process.env.PUBLIC_URL + '/shop/sidebar/2cols'}>
              <button
                className={`btn-layout ${'2cols' === cols ? 'active' : ''}`}
              >
                <svg width="10" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
                </svg>
              </button>
            </Link>

            <Link to={process.env.PUBLIC_URL + '/shop/sidebar/3cols'}>
              <button
                className={`btn-layout ${'3cols' === cols ? 'active' : ''}`}
              >
                <svg width="16" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="12" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
                  <rect x="12" y="6" width="4" height="4"></rect>
                </svg>
              </button>
            </Link>

            <Link to={process.env.PUBLIC_URL + '/shop/sidebar/4cols'}>
              <button
                className={`btn-layout ${'4cols' === cols ? 'active' : ''}`}
              >
                <svg width="22" height="10">
                  <rect x="0" y="0" width="4" height="4"></rect>
                  <rect x="6" y="0" width="4" height="4"></rect>
                  <rect x="12" y="0" width="4" height="4"></rect>
                  <rect x="18" y="0" width="4" height="4"></rect>
                  <rect x="0" y="6" width="4" height="4"></rect>
                  <rect x="6" y="6" width="4" height="4"></rect>
                  <rect x="12" y="6" width="4" height="4"></rect>
                  <rect x="18" y="6" width="4" height="4"></rect>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="products mb-3">
        {'list' === cols ? (
          products.map((item, index) => (
            <div key={'seleton-' + index}>
              <div className="skel-pro skel-pro-list"></div>

              <ProductEight
                product={item}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                onAddToCompare={addToCompare}
                showQuickView={showQuickViewModal}
              />
            </div>
          ))
        ) : (
          <div className="row">
            {products.map((item, index) => (
              <div className={grid[cols]} key={'product' + index}>
                <div className="skel-pro"></div>

                <ProductSix
                  product={item}
                  type="sidebar"
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  onAddToCompare={addToCompare}
                  showQuickView={showQuickViewModal}
                />
              </div>
            ))}
          </div>
        )}
        <QuickView />
      </div>

      <Pagination
        aclass={`${'list' === props.cols ? '' : 'justify-content-center'}`}
        count={productLength}
        pageCount={productsInfo?.pageCount}
        onChange={changePos}
        cols={cols}
        filters={filters}
      />
    </>
  );
}

export const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    products: state.data.products ? state.data.products : [],
    productLoading: state.data.loading,
    productsInfo: state.data.productsInfo || {},
  };
};

export default connect(mapStateToProps, {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
  filterSort,
})(ProductList);
