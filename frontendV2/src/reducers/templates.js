import {
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
  PREVIEW_TEMPLATE,
  SET_TEMPLATE
} from "../constants/action-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getTemplates } from "../actions/templateAction";

const initialState = {
  loading: false,
  templates: [],
  id: null
};

const templatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES_REQUEST:
      getTemplates()
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
    case SET_TEMPLATE || PREVIEW_TEMPLATE:
      return {
        ...state,
        id: action.id
      }
    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "molla-",
  key: "templates",
  storage,
};

export default persistReducer(persistConfig, templatesReducer);
