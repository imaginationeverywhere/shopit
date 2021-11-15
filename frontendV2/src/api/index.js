import axios from "axios";

const API_URL = process.env.PUBLIC_URL;
const MAIN_API_URL = process.env.REACT_APP_API_URL;

// API to get products from mock server
export const getProducts = function() {
  return axios
    .get(API_URL + "/mock-server/products.json")
    .then(function(response) {
      return response.data;
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
