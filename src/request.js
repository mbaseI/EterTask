import axios from 'axios';

const createAxios = (url) => {
  const axiosInstance = axios.create({
    baseURL: `${'https://5fc9346b2af77700165ae514.mockapi.io'}/${url}`,
    timeout: 5000,
    withCredentials: false,
    headers: {
      accept: '*/*',
      'Access-Control-Allow--Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
    },
    validateStatus(status) {
      return status >= 200 && status < 501;
    },
  });
  return axiosInstance;
};

var products = createAxios('products');

var ApiStore = {
  products,
};

export default ApiStore;
