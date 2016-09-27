var axios = require('axios');

function getPartitions () {
  return axios.get("http://localhost:3001/partitions?" + new Date().getTime());
}

function getPartitionFiles ( path ) {
  return axios.get("http://localhost:3001" + path + "/files?" + new Date().getTime());
}

function updateRenderFiles ( pathname, directory ) {
  return axios.get("http://localhost:3001" + pathname + "/files/" + directory + "?" + new Date().getTime());
}

function cancelDocumentList ( path, cancelPath ) {
  return axios.get("http://localhost:3001" + path + "/files/" + cancelPath + "?" + new Date().getTime());
}

var serverRequestHelpers = {
  getPartitionsHelper: function () {
    return getPartitions();
  },
  getPartitionFilesHelper: function ( path ) {
    return getPartitionFiles( path );
  },
  updateRenderFilesHelper: function( pathname, directory ) {
    return updateRenderFiles( pathname, directory );
  },
  cancelDocumentListHelper: function ( path, cancelPath ) {
    return cancelDocumentList( path, cancelPath );
  }
}

module.exports = serverRequestHelpers;
