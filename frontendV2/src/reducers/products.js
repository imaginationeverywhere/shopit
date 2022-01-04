import {
  RECEIVE_PRODUCTS,
  SHOW_QUICKVIEW,
  CLOSE_QUICKVIEW,
  RECEIVE_ADMIN_PRODUCTS,
  RECEIVE_SINGLE_PRODUCT,
  PRODUCT_LOADING,
} from '../constants/action-types';
import { findIndex } from '../utils';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  loading: true,
  products: [],
  productsInfo: {},
  singleProduct: null,
  adminProducts: [],
  productDetail: [],
  quickView: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const allProducts = action.products || {};
      const { products, ...restInfo } = allProducts;
      return {
        ...state,
        loading: false,
        productsInfo: restInfo,
        products,
      };
    case RECEIVE_ADMIN_PRODUCTS:
      return {
        ...state,
        loading: false,
        adminProducts: action.products,
      };
    case RECEIVE_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        singleProduct: action.product,
      };
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_QUICKVIEW:
      let index = findIndex(
        state.products,
        (product) => product.id === action.productId,
      );
      if (-1 !== index) {
        const item = state.products[index];
        return {
          ...state,
          quickView: true,
          productDetail: item,
        };
      }
      break;

    case CLOSE_QUICKVIEW:
      return { ...state, quickView: false };

    default:
      return state;
  }
};
const persistConfig = {
  keyPrefix: 'molla-',
  key: 'products',
  storage,
};

export default persistReducer(persistConfig, productReducer);
