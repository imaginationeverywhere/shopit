import {
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
} from "../constants/action-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "molla-",
  key: "templates",
  storage,
};

export default persistReducer(persistConfig, usersReducer);
