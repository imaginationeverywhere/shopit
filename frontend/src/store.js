import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  productDetailsReducer,
  productsReducer,
  newReviewReducer,
} from './reducers/productReducers';

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
} from './reducers/orderReducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingInfo: localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {},
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
