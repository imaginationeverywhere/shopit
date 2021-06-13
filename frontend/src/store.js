import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  productDetailsReducer,
  productsReducer,
} from './reducers/productReducers';

import { authReducer, userReducer } from './reducers/userReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
