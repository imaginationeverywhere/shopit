import axios from "axios";

// axios.defaults.withCredentials = true

axios.interceptors.response.use(null, error => {
  // clear token for 401 error
  if (error.response && error.response.status === 401) {
    localStorage.removeItem("token");
  }
  return Promise.reject(error);
});

const API_URL = process.env.PUBLIC_URL;
const MAIN_API_URL = process.env.REACT_APP_API_URL;

// API to get products from mock server
export const getProducts = function() {
  return axios
    .get(MAIN_API_URL + "products")
    .then(function(response) {
      const myData = response.data && response.data.products.map(({_id, sizes, ...rest}) => ({...rest, 
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
  return ( { 
      'Cookie': 'token=' + localStorage.getItem('token'), 
    }
  )
}

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

export const adminLogin = async (values) => {
    const res = await axios.post(`${MAIN_API_URL}login`, values);
    return res.data;
}

export const addProducts = async ({body}) => {
  return axios({
    method: 'post',
    url: `${MAIN_API_URL}admin/product/new`,
    data: body, 
    contentType: 'multipart/form-data',
    headers: myHeaders()
  });

}

export const updateProducts = async ({id, body}) => {
  return axios({
    method: 'put',
    url: `${MAIN_API_URL}admin/product/${id}`,
    data: body, 
    contentType: 'multipart/form-data',
    headers: myHeaders()
  });
}

export const deleteProducts = async ({id}) => {
  return axios({
    method: 'delete',
    url: `${MAIN_API_URL}admin/product/${id}`,
    headers: myHeaders()
  });
}
