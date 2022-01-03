import { axiosInstance } from '../api';

import {
  GET_SHIPMENT_CARRIERS_FAIL,
  GET_SHIPMENT_CARRIERS_REQUEST,
  GET_SHIPMENT_CARRIERS_SUCCESS,
  SET_SELECTED_CARRIER_REQUEST,
} from '../constants/shipmentConstants';

export const getCarriers = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_SHIPMENT_CARRIERS_REQUEST });
    const { data } = await axiosInstance.post('/shipment/carriers', payload);
    dispatch({
      type: GET_SHIPMENT_CARRIERS_SUCCESS,
      payload: data,
    });
    console.log('=======its here>', data);
  } catch (error) {
    dispatch({
      type: GET_SHIPMENT_CARRIERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const setSelectedCarrier = (selectedCarrier) => ({
  type: SET_SELECTED_CARRIER_REQUEST,
  payload: selectedCarrier,
});
