import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API

export default {
  //get all employees
  getEmpoloyeeInfo: function() {
    return axios.get('https://randomuser.me/api/?results=200&nat=us');
  }
};
