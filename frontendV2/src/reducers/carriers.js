import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  GET_SHIPMENT_CARRIERS_REQUEST,
  GET_SHIPMENT_CARRIERS_SUCCESS,
} from "../constants/shipmentConstants";

const carriersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_SHIPMENT_CARRIERS_REQUEST:
      return { ...state, loading: true };
    case GET_SHIPMENT_CARRIERS_SUCCESS:
      const updatedCarrier = {
        ...state,
        data: action.payload.carriers,
        loading: false,
      };
      localStorage.setItem("carriersReducer", JSON.stringify(updatedCarrier));
      return updatedCarrier;
    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "molla-",
  key: "carriers",
  storage,
};

export default persistReducer(persistConfig, carriersReducer);
