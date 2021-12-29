import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { SET_SELECTED_CARRIER_REQUEST } from "../constants/shipmentConstants";

const selectedCarrierReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_CARRIER_REQUEST: {
      const updatedState = { ...state, ...action.payload };
      localStorage.setItem(
        "selectedCarrierReducer",
        JSON.stringify(updatedState)
      );

      return updatedState;
    }
    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "molla-",
  key: "selected",
  storage,
};

export default persistReducer(persistConfig, selectedCarrierReducer);
