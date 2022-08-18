/*
	To reroute all the request to single server url
*/
const axios = require('axios');

module.exports = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
  });
}