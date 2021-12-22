import axios from "axios";

const API_URL = process.env.PUBLIC_URL;
const MAIN_API_URL = process.env.REACT_APP_API_URL;

// API to get products from mock server
export const getProducts = function() {
  return axios
    .get(MAIN_API_URL + "products")
    .then(function(response) {
      // const myData = response.data.products.map(({_id, ...rest}) => ({...rest, id: _id}));
      // console.log({ myData });
      return response.data.products;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const getTemplates = function() {
  return axios
    .get(MAIN_API_URL + "templates")
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const previewTemplate = function(templateId) {
  return axios
    .get(MAIN_API_URL + "templates", {templateId})
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const setTemplate = function(templateId) {
  return axios
    .post(MAIN_API_URL + "templates", {templateId})
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};
