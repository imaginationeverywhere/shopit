import axios from 'axios';
import { getProductImages } from '../utils';

axios.interceptors.response.use(null, (error) => {
  // clear token for 401 error
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
  }
  return Promise.reject(error);
});

const API_URL = process.env.PUBLIC_URL;
const MAIN_API_URL = process.env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: MAIN_API_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});

// API to get products from mock server
export const getProductsWithFilters = function(queries = {}) {
  return axiosInstance
    .post(
      `products/withFilters?page=${queries?.page ||
        1}&pageSize=${queries?.pageSize || 4}`,
      { filters: queries },
    )
    .then(function(response) {
      if (response?.data?.products) {
        const payload = response.data;
        const products = payload.products.map(({ _id, sizes, ...rest }) => ({
          ...rest,
          id: _id,
          size: sizes,
          sizes,
          ...getProductImages(rest?.productImages),
        }));
        return { ...payload, products };
      } else throw new Error('Products do not exist');
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const getProducts = function(queries = {}) {
  return axiosInstance
    .get(
      `products?page=${queries?.page || 1}&pageSize=${queries?.pageSize || 4}`,
    )
    .then(function(response) {
      if (response?.data?.products) {
        const payload = response.data;
        const products = payload.products.map(({ _id, sizes, ...rest }) => ({
          ...rest,
          id: _id,
          size: sizes,
          sizes,
          ...getProductImages(rest?.productImages),
        }));
        return { ...payload, products };
      } else throw new Error('Products do not exist');
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const getSingleProduct = function(id) {
  return axiosInstance
    .get(`product/${id}`)
    .then(function(response) {
      if (response.data.product) {
        const myData = {
          ...response.data.product,
          ...getProductImages(response.data.product?.productImages),
        };
        return myData;
      } else {
        throw new Error('Invalid product id');
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const getAdminProducts = function() {
  return axiosInstance
    .get('admin/products')
    .then(function(response) {
      const myData =
        response.data &&
        response.data.products.map(({ _id, sizes, ...rest }) => ({
          ...rest,
          id: _id,
          size: sizes,
          sizes,
        }));
      return myData;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

const myHeaders = () => {
  return {
    Cookie: 'token=' + localStorage.getItem('token'),
  };
};

export const getTemplates = function () {
  return axiosInstance
    .get('templates')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const previewTemplate = function (templateId) {
  return axiosInstance
    .get('templates', { templateId })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const setTemplate = function (templateId) {
  return axiosInstance
    .post('templates', { templateId })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const login = async (values) => {
  const res = await axiosInstance.post(`login`, values);
  return res.data;
};

export const register = async (values) => {
  const res = await axiosInstance.post(`register`, values);
  return res.data;
};

export const addProducts = async ({ body }) => {
  return axiosInstance.post('admin/product/new', body, {
    headers: myHeaders(),
  });
};

export const updateProducts = async ({ id, body }) => {
  return axiosInstance.put(`admin/product/${id}`, body, {
    headers: myHeaders(),
  });
};

export const deleteProducts = async ({ id }) => {
  return axiosInstance.delete(
    `admin/product/${id}`,
    {},
    {
      headers: myHeaders(),
    },
  );
};

export const addProductImage = async ({ body, productId }) => {
  return axiosInstance.post(`admin/productImage/${productId}`, body, {
    contentType: 'multipart/form-data',
    headers: myHeaders(),
  });
};

export const updateProductImage = async ({ productId, body }) => {
  return axiosInstance.put(`admin/productImage/${productId}`, body, {
    contentType: 'multipart/form-data',
    headers: myHeaders(),
  });
};

export const deleteProductImage = async ({ productId, body }) => {
  return axiosInstance.put(`admin/removeProductImage/${productId}`, body, {
    headers: myHeaders(),
  });

export const newShippingInfo = async paylpad => {
  return axiosInstance.post('address/new', paylpad, {});
};
  
export const updateShippingInfo = async paylpad => {
  return axiosInstance.put('/address/update', paylpad, {});
};
