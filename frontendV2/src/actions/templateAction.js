import {
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_SUCCESS,
  SET_TEMPLATE
} from "../constants/adminConstants";
import axios from "axios";

export const getTemplates = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEMPLATES_REQUEST });
    const { data } = await axios.get("mock-server/admin.json");

    dispatch({ type: GET_TEMPLATES_SUCCESS, templates: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const setTemplate = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_TEMPLATE}, id)
  } catch (e) {
    console.log(e.message);
  }
}
