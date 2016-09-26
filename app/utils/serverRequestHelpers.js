var axios = require('axios');

function getPartitions () {
  return axios.get("http://localhost:3001/partitions");
}

var serverRequestHelpers = {
  getPartitionsHelper: function () {
    return getPartitions();
  }
}

module.exports = serverRequestHelpers;
