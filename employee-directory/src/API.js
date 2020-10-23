import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API

export default {
  getEmpoloyeeInfo: function() {
    return axios.get('https://randomuser.me/api/?results=200');
  }
};
