var React = require('react');
var DirectoryContainer = require('../containers/DirectoryContainer');
var DocumentListContainer = require('../containers/DocumentListContainer');
var GoBackButton = require('../components/GoBackButton');
var AddButton = require('../components/AddButton');


var RootFolderContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      folders: [],
      documents: [],
      pathList: [],
      addButton: false,
      documentToAdd: {},
      addDocumentList: [],
      clickedDocuments: []
    }
  },
  componentWillMount: function() {
    var path = this.props.location.pathname;
    $.ajax({
      url: "http://localhost:3000" + path,
      type: "GET"
    }).done( function( response ) {
      this.state.pathList.push( path );

      this.setState({
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
    this.state.clickedDocuments.push( data.name )

    this.setState({
      addButton: false,
      documentToAdd: {},
      addDocumentList: this.state.addDocumentList,
      clickedDocuments: this.state.clickedDocuments
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
  componentWillUnMount: function() {
    debugger;
  },
  render: function() {
    if ( this.state.addButton ) {
      var addButton =
        <AddButton
            onUpdateDocumentList={ this.handleUpdateDocumentList }
            documentToAdd={ this.state.documentToAdd } />
    }
    if ( this.state.pathList.length > 1 ) {
      var goBackButton =
        <GoBackButton
            onGoBack={ this.handleGoBack } />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <DirectoryContainer
                folders={ this.state.folders }
                documents={ this.state.documents }
                onUpdateRender={ this.handleUpdateRender }
                onShowAddButton={ this.handleShowAddButton }
                clickedDocuments={ this.state.clickedDocuments } />
          </div>

          <div className="col-lg-4">
            { addButton }
          </div>

          <div className="col-lg-4">
            <DocumentListContainer
                documentList={ this.state.addDocumentList } />
          </div>
        </div>

        <div className="row">
          { goBackButton }
        </div>
      </div>
    )
  }
});

module.exports = RootFolderContainer;