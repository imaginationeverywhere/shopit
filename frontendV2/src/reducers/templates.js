import {
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
  SET_TEMPLATE
} from "../constants/action-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  templates: [],
  id: 1
};

export const templatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TEMPLATES_SUCCESS:
      return {
        ...state,
        loading: false,
        templates: action.templates
      };
    case SET_TEMPLATE:
      return {
        ...state,
        id: action.id
      }
    default:
      return state;
  }
};

const persistConfig = {
  key: "templates",
  storage,
};

export default persistReducer(persistConfig, templatesReducer);