import { combineReducers } from "redux";
import {
  GET_SHIPMENT_CARRIERS_REQUEST,
  GET_SHIPMENT_CARRIERS_SUCCESS,
  SET_SELECTED_CARRIER_REQUEST,
} from "../constants/shipmentConstants";

const carriers = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_SHIPMENT_CARRIERS_REQUEST:
      return { ...state, loading: true };
    case GET_SHIPMENT_CARRIERS_SUCCESS:
      return { ...state, data: action.payload.carriers, loading: false };
    default:
      return state;
  }
};

const selectedCarrier = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECTED_CARRIER_REQUEST:
      return { ...state, carrier: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ carriers, selectedCarrier });
