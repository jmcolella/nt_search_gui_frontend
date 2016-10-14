var axios = require('axios');

function getPartitions () {
  return axios.get("http://localhost:3001/partitions");
}

function getPartitionFiles ( path ) {
  console.log( "http://localhost:3001" + path + "/files/");
  return axios.get("http://localhost:3001" + path + "/files/");
}

function updateRenderFiles ( pathname, directory ) {
  console.log("http://localhost:3001" + pathname + "/files/" + directory);
  return axios.get("http://localhost:3001" + pathname + "/files/" + directory);
}

function cancelDocumentList ( path, cancelPath ) {
  console.log( "http://localhost:3001" + path + "/files/" + cancelPath );
  return axios.get("http://localhost:3001" + path + "/files/" + cancelPath);
}

function postSubmittedDocuments ( csvData ) {
  return axios({
    method: "POST",
    url: "http://localhost:3001/csv",
    data: csvData
  });
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
  },
  postSubmittedDocumentsHelper: function ( csvData ) {
    return postSubmittedDocuments( csvData );
  }
}

module.exports = serverRequestHelpers;