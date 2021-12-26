import axios from 'axios';

// axios.defaults.withCredentials = true

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
export const getProducts = function() {
  return axiosInstance
    .get('products')
    .then(function(response) {
      const myData =
        response.data &&
        response.data.products.map(({ _id, sizes, ...rest }) => ({
          ...rest,
          id: _id,
          size: sizes,
          sizes,
          rawSmPictures: rest.smPictures,
          rawPictures: rest.pictures,
          smPictures: rest.smPictures.filter((url) => !!url),
          pictures: rest.pictures.filter((url) => !!url),
        }));
      return myData;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

const myHeaders = () => {
  return {
    Cookie: 'token=' + localStorage.getItem('token'),
  };
};

export const getTemplates = function() {
  return axiosInstance
    .get('templates')
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const previewTemplate = function(templateId) {
  return axiosInstance
    .get('templates', { templateId })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const setTemplate = function(templateId) {
  return axiosInstance
    .post('templates', { templateId })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const login = async (values) => {
  const res = await axiosInstance.post(`login`, values);
  return res.data;
};

export const addProducts = async ({ body }) => {
  return axiosInstance.post('admin/product/new', body, {
    contentType: 'multipart/form-data',
    headers: myHeaders(),
  });
};

export const updateProducts = async ({ id, body }) => {
  return axiosInstance.put(`admin/product/${id}`, body, {
    contentType: 'multipart/form-data',
    headers: myHeaders(),
  });
};
