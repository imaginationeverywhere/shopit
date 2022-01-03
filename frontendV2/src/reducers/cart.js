import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QTY,
  CHANGE_SHIPPING,
  REFRESH_STORE,
  SAVE_SHIPPING_INFO,
  SAVE_BILLING_INFO,
} from '../constants/action-types';
import { findIndex, makeParcelArray } from '../utils';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  cart: [],
  shippingInfo: {},
  billingInfo: {},
  shipping: 'free',
  tax: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;

      if (findIndex(state.cart, (product) => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === productId) {
            cartAcc.push({
              ...product,
              qty: parseInt(product.qty) + parseInt(action.qty),
              parcels: makeParcelArray(
                parseInt(product.qty) + parseInt(action.qty),
                product?.parcel,
              ),
              sum:
                (product.discount ? product.salePrice : product.price) *
                (parseInt(product.qty) + parseInt(action.qty)),
            }); // Increment qty
          } else {
            cartAcc.push(product);
          }
          return cartAcc;
        }, []);
        return { ...state, cart };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.product,
            qty: action.qty,
            parcels: makeParcelArray(
              parseInt(action.qty),
              action.product?.parcel,
            ),
            sum:
              (action.product.discount
                ? action.product.salePrice
                : action.product.price) * action.qty,
          },
        ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.productId),
      };

    case CHANGE_QTY:
      const cart = state.cart.reduce((cartAcc, product) => {
        if (product.id === action.productId) {
          cartAcc.push({
            ...product,
            qty: action.qty,
            parcels: makeParcelArray(parseInt(action.qty), product?.parcel),
            sum:
              (product.discount ? product.salePrice : product.price) *
              action.qty,
          }); // Increment qty
        } else {
          cartAcc.push(product);
        }
        return cartAcc;
      }, []);

      return { ...state, cart };

    case REFRESH_STORE:
      return { ...state, cart: [], shipping: 'free' };

    case CHANGE_SHIPPING:
      return { ...state, shipping: action.shipping };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case SAVE_BILLING_INFO:
      return {
        ...state,
        billingInfo: action.payload,
      };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: 'molla-',
  key: 'cartlist',
  storage,
};

export default persistReducer(persistConfig, cartReducer);
