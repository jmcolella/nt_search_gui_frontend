var React = require('react');
var ReactDOM = require("react-dom");
var findDOMNode = ReactDOM.findDOMNode;
var DirectoryContainer = require('../containers/DirectoryContainer');
var DocumentsToSubmitListContainer = require('../containers/DocumentsToSubmitListContainer');
var DocumentsSubmittedListContainer = require('../containers/DocumentsSubmittedListContainer');
var AddButton = require('../components/AddButton');


var RootContainer = React.createClass({
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
      clickedDocuments: [],
      submit: false,
      cancelPath: ""
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
        addButton: false,
        submit: false
      })
    }.bind(this));
  },
  handleShowAddButton: function( data ) {
    this.setState({
      addButton: true,
      documentToAdd: data
    })
  },
  handleCancelAddDocument: function() {
    this.setState({
      addButton: false,
      documentToAdd: {}
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
  handleRemoveDocument: function( data ) {
    this.state.addDocumentList = this.state.addDocumentList.filter( function(doc) { return doc.name != data.name });
    this.state.clickedDocuments = this.state.clickedDocuments.filter(function(doc){return doc != data.name});

    this.setState({
      clickedDocuments: this.state.clickedDocuments,
      addDocumentList: this.state.addDocumentList
    })
  },
  handleSubmitDocumentList: function() {
    this.setState({
      submit: true,
      cancelPath: this.state.pathList[this.state.pathList.length - 1]
    })
  },
  handleCancelDocumentList: function() {
    $.ajax({
      url: "http://localhost:3000" + this.state.cancelPath,
      type: "GET"
    }).done( function( response ) {
        this.setState({
          partitions: response.partitions || [],
          folders: response.sub_folders || response.folders || [],
          documents: response.documents || [],
          addButton: false,
          cancelPath: "",
          submit: false
        })
    }.bind(this));
  },
  render: function() {
    if ( this.state.submit === true ) {
      var rootRender =
        <div className="row text-center">
          <div className="col-lg-12">
            <DocumentsSubmittedListContainer
                  documentList={ this.state.addDocumentList }
                  submit={ this.state.submit }
                  onCancelDocumentList={ this.handleCancelDocumentList } />
          </div>
        </div>
    } else {
      var rootRender =
        <div className="row text-center">
          <div className="col-lg-4">
            <DirectoryContainer
                folders={ this.state.folders }
                documents={ this.state.documents }
                onUpdateRender={ this.handleUpdateRender }
                pathList={ this.state.pathList }
                onGoBack={ this.handleGoBack }
                onShowAddButton={ this.handleShowAddButton }
                documentToAdd={ this.state.documentToAdd }
                clickedDocuments={ this.state.clickedDocuments }
                cancelPath={ this.state.cancelPath } />
          </div>

          <div className="col-lg-4">
            <AddButton
              addButton={ this.state.addButton }
              onUpdateDocumentList={ this.handleUpdateDocumentList }
              onCancelAddDocument={ this.handleCancelAddDocument }
              documentToAdd={ this.state.documentToAdd } />
          </div>

          <div className="col-lg-4">
            <DocumentsToSubmitListContainer
                documentList={ this.state.addDocumentList }
                onSubmitDocumentList={ this.handleSubmitDocumentList }
                submit={ this.state.submit }
                onRemoveDocument={ this.handleRemoveDocument } />
          </div>
        </div>
    }
    return (
      <div id="root-container" className="container-fluid">

        { rootRender }

      </div>
    )
  }
});

module.exports = RootContainer;