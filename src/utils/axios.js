import axios from 'axios';
// import Cookies from "js-cookie";
// import Helper from "../common/helper.js";

const instance = axios.create({
  baseURL: 'https://digital.allcasino.in:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});


instance.interceptors.request.use(
  (config) => {
    // Add authorization token before request is sent
    // const token = Cookies.get('access_token');
    // let session = Helper();
    // let user_token;
    // if (session) {
    //   user_token = session.tokens.access.token;
    // }

    // if (user_token) {
    // config.headers.Authorization = `Bearer ${user_token}`;
    config.headers['Content-Type'] = 'application/json';
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors
    if (error.response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default instance;
