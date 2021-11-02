import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  productDetailsReducer,
  productsReducer,
  newReviewReducer,
  newProductReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer,
} from "./reducers/productReducers";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducers";

import { cartReducer } from "./reducers/cartReducers";

import {
  newOrderReducer,
  myOrdersReducer,
  orderDetailsReducer,
  allOrdersReducer,
  orderReducer,
} from "./reducers/orderReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import shipmentReducer from "./reducers/shipmentReducer";

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
  allOrders: allOrdersReducer,
  allUsers: allUsersReducer,
  newProduct: newProductReducer,
  product: productReducer,
  order: orderReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  shipment: shipmentReducer,
});

const getLocalStorageItems = (key) => {
  if(!process.client) {
    return null;
  }
  return localStorage.getItem(key);
  
}

let initialState = {
  cart: {
    cartItems: JSON.parse(getLocalStorageItems("cart")) || {},
    shippingInfo: JSON.parse(getLocalStorageItems("shippingInfo")) || {},
  },
  shipment: {
    carriers: JSON.parse(getLocalStorageItems("carriers")) || {},
    selectedCarrier: JSON.parse(getLocalStorageItems("selectedCarriers")) || {}
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
