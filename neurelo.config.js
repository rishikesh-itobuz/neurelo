const axios = require("axios");
const dotenv = require("dotenv").config();


const customAxios = axios.create({
  withCredentials: true,
});

console.log(customAxios)

customAxios.interceptors.response.use(
  (response) => {
    // console.log('response', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = {
  customAxios,
};