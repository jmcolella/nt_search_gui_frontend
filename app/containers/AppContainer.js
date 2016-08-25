var React = require('react');
var PartitionContainer = require('../containers/PartitionContainer');
var RootFolderContainer = require('../containers/RootFolderContainer');
var GoBackButton = require('../components/GoBackButton');

var AppContainer = React.createClass({
  getInitialState: function() {
    return {
      partitions: [],
      folders: [],
      documents: [],
      pathList: []
    }
  },
  componentWillMount: function() {
    $.ajax({
      url: "http://localhost:3000/partitions",
      type: "GET"
    }).done( function( response ) {
      this.state.pathList.push("/partitions");

      this.setState({
        partitions: response.partitions,
        folders: response.folders || [],
        documents: response.documents || [],
        pathList: this.state.pathList
      })
    }.bind(this));
  },
  handleUpdateRender: function( path ) {
    debugger;
    $.ajax({
      url: "http://localhost:3000" + path,
      type: "GET",
    }).done( function( response ) {
      this.state.pathList.push( path );

      this.setState({
        partitions: response.partitions || [],
        folders: response.sub_folders || response.folders || [],
        documents: response.documents || [],
        pathList: this.state.pathList
      })
    }.bind(this));
  },
  handleGoBack: function() {
    $.ajax({
      url: "http://localhost:3000" + this.state.pathList[this.state.pathList.length - 2],
      type: "GET"
    }).done( function( response ) {
      if ( response.folders ) {
        var updatedFolders = response.folders
      } else {
        var updatedFolders = response.sub_folders
      }

      this.setState({
        folders: updatedFolders,
        documents: response.documents || [],
        pathList: this.state.pathList.slice(0, this.state.pathList.length - 1)
      })
    }.bind(this));
  },
  render: function() {
    if ( this.state.partitions.length > 0 ) {
      var partitionContainer =
        <PartitionContainer
            partitions={ this.state.partitions }
            onUpdateRender={ this.handleUpdateRender } />
    } else if ( this.state.folders.length > 0 ){
      var rootFolderContainer =
        <RootFolderContainer
            folders={ this.state.folders }
            documents={ this.state.documents }
            onUpdateRender={ this.handleUpdateRender } />
    }
    if ( this.state.pathList.length > 1 ) {
      var goBackButton =
        <GoBackButton
            onGoBack={ this.handleGoBack } />
    }
    return (
      <div className="container text-center">
        <div className="row">
          { partitionContainer }
        </div>

        <div className="row">
          { rootFolderContainer }
        </div>

        <div className="row">
          { goBackButton }
        </div>
      </div>
    )
  }
});

module.exports = AppContainer;