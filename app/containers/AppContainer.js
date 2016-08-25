var React = require('react');
var PartitionContainer = require('../containers/PartitionContainer');
var RootFolderContainer = require('../containers/RootFolderContainer');
var GoBackButton = require('../components/GoBackButton');
var AddButton = require('../components/AddButton');
var DocumentListContainer = require('../containers/DocumentListContainer')

var AppContainer = React.createClass({
  getInitialState: function() {
    return {
      partitions: [],
      folders: [],
      documents: [],
      pathList: [],
      addButton: false,
      documentToAdd: {},
      addDocumentList: []
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
  handleShowAddButton: function( data ) {
    this.setState({
      addButton: true,
      documentToAdd: data
    })
  },
  handleUpdateDocumentList: function( data ) {
    this.state.addDocumentList.push( data )
    this.setState({
      addButton: false,
      documentToAdd: {},
      addDocumentList: this.state.addDocumentList
    })
  },
  handleGoBack: function() {
    $.ajax({
      url: "http://localhost:3000" + this.state.pathList[this.state.pathList.length - 2],
      type: "GET"
    }).done( function( response ) {

      this.setState({
        partitions: response.partitions || [],
        folders: response.sub_folders || response.folders || [],
        documents: response.documents || [],
        pathList: this.state.pathList.slice(0, this.state.pathList.length - 1),
        addButton: false
      })
    }.bind(this));
  },
  render: function() {
    if ( this.state.partitions.length > 0 ) {
      var partitionContainer =
        <PartitionContainer
            partitions={ this.state.partitions }
            onUpdateRender={ this.handleUpdateRender } />
    } else if ( this.state.folders.length > 0 ) {
      var rootFolderContainer =
        <RootFolderContainer
            folders={ this.state.folders }
            documents={ this.state.documents }
            onUpdateRender={ this.handleUpdateRender }
            onShowAddButton={ this.handleShowAddButton }
            documentToAdd={ this.state.documentToAdd }
            documentList={ this.state.addDocumentList } />
    }
    if ( this.state.addButton ) {
      var addButton =
        <AddButton
            onUpdateDocumentList={ this.handleUpdateDocumentList }
            documentToAdd={ this.state.documentToAdd } />
    }
    if ( this.state.addDocumentList.length > 0 ) {
      var documentListContainer =
        <DocumentListContainer
            documentList={ this.state.addDocumentList } />
    }
    if ( this.state.pathList.length > 1 ) {
      var goBackButton =
        <GoBackButton
            onGoBack={ this.handleGoBack } />
    }
    return (
      <div className="container text-center">

        { partitionContainer }

        <div className="row">
          <div className="col-lg-4">
            { rootFolderContainer }
          </div>

          <div className="col-lg-4">
            { addButton }
          </div>

          <div className="col-lg-4">
            { documentListContainer }
          </div>
        </div>


        <div className="row">
          { goBackButton }
        </div>
      </div>
    )
  }
});

module.exports = AppContainer;