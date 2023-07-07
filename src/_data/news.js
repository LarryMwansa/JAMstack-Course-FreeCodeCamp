const axios = require("axios")
require('dotenv').config()

module.exports = async function() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=82e92f91f00d4fc28a2acf43d211dc12&pageSize=5');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };