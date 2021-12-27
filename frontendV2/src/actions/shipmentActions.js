import axios from 'axios';
import {
  GET_SHIPMENT_CARRIERS_FAIL,
  GET_SHIPMENT_CARRIERS_REQUEST,
  GET_SHIPMENT_CARRIERS_SUCCESS,
  SET_SELECTED_CARRIER_REQUEST,
} from '../constants/shipmentConstants';

export const getCarriers = payload => async dispatch => {
  try {
    dispatch({ type: GET_SHIPMENT_CARRIERS_REQUEST });

    const link = `http://localhost:4000/api/v1/shipment/carriers`;

    const { data } = await axios.post(link, payload);
    dispatch({
      type: GET_SHIPMENT_CARRIERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHIPMENT_CARRIERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const setSelectedCarrier = selectedCarrier => ({
  type: SET_SELECTED_CARRIER_REQUEST,
  payload: selectedCarrier,
});
