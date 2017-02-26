var axios = require('axios');

function getPartitions () {
  return axios.get("http://96.57.61.154:3303/partitions");
}

function getPartitionFiles ( path ) {
  console.log( "http://96.57.61.154:3303" + path + "/files/");
  return axios.get("http://96.57.61.154:3303" + path + "/files/");
}

function updateRenderFiles ( pathname, directory ) {
  console.log("http://96.57.61.154:3303" + pathname + "/files/" + directory);
  return axios.get("http://96.57.61.154:3303" + pathname + "/files/" + directory);
}

function cancelDocumentList ( path, cancelPath ) {
  console.log( "http://96.57.61.154:3303" + path + "/files/" + cancelPath );
  return axios.get("http://96.57.61.154:3303" + path + "/files/" + cancelPath);
}

function postSubmittedDocuments ( csvData ) {
  return axios({
    method: "POST",
    url: "http://96.57.61.154:3303/csv",
    data: csvData
  });
}

function closeSocket () {
  return axios({
    method: "POST",
    url: "http://96.57.61.154:3303/close_mediation"
  });
}

var serverRequestHelpers = {
  indexHelper: function () {
    return axios.get( "http://96.57.61.154:3303/index" + new Date() );
  },
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
  },
  closeSocketHelper: function () {
    return closeSocket();
  }
}

module.exports = serverRequestHelpers;
