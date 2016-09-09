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
      partition: "",
      folders: [],
      documents: [],
      pathList: [],
      breadcrumbList: [],
      addButton: false,
      documentToAdd: {},
      clickedDocumentObjects: [],
      clickedDocumentNames: [],
      documentPath: [],
      submit: false,
      cancelPath: ""
    };
  },
  componentWillMount: function() {
    var path = this.props.location.pathname;

    this.state.breadcrumbList.push( {
      path: this.props.location.pathname,
      name: "home"
    } );

    $.ajax({
      url: "http://localhost:3000" + path,
      type: "GET"
    }).done( function( response ) {
      this.state.pathList.push( path );

      this.setState({
        partition: "partition-" + this.props.params.id,
        folders: response.folders || [],
        documents: response.documents || [],
        pathList: this.state.pathList,
        breadcrumbList: this.state.breadcrumbList
      });
    }.bind(this));
  },
  handleUpdateRender: function( path, current ) {
    if ( typeof(current) === "string" ) {
      this.state.documentPath.push( current );
      this.state.breadcrumbList.push( {
        path: path,
        name: current
      } );
    } else {
      var sliceBreadCrumbIdx = this.state.breadcrumbList.indexOf( current ) + 1;
      this.state.breadcrumbList.splice( sliceBreadCrumbIdx , this.state.breadcrumbList.length - sliceBreadCrumbIdx );

      var sliceDocumentPathIdx = this.state.documentPath.indexOf( current.name ) + 1;
      this.state.documentPath.splice( sliceDocumentPathIdx, this.state.documentPath.length - sliceDocumentPathIdx );
    }

    $.ajax({
      url: "http://localhost:3000" + path,
      type: "GET",
    }).done( function( response ) {
      this.state.pathList.push( path );

      this.setState({
        partitions: response.partitions || [],
        folders: response.sub_folders || response.folders || [],
        documents: response.documents || [],
        pathList: this.state.pathList,
        breadcrumbList: this.state.breadcrumbList,
        documentPath: this.state.documentPath
      });
    }.bind(this));
  },
  handleShowAddButton: function( data ) {
    this.setState({
      addButton: true,
      documentToAdd: data
    });
  },
  handleCancelAddDocument: function() {
    this.setState({
      addButton: false,
      documentToAdd: {}
    });
  },
  handleUpdateDocumentList: function( data ) {
    this.state.documentPath.push( data.name );
    this.state.clickedDocumentNames.push( data.name );
    this.state.clickedDocumentObjects.push(
      { doc: data,
        relativePath: this.state.documentPath.join("/")
      }
    );

    this.setState({
      addButton: false,
      documentToAdd: {},
      clickedDocumentObjects: this.state.clickedDocumentObjects,
      clickedDocumentNames: this.state.clickedDocumentNames,
      documentPath: this.state.documentPath.slice( 0, this.state.documentPath.length - 1 )
    });
  },
  handleRemoveDocument: function( data ) {
    this.state.clickedDocumentObjects = this.state.clickedDocumentObjects.filter( function(obj) {
      return obj.doc.name != data.name
    });
    this.state.clickedDocumentNames = this.state.clickedDocumentNames.filter( function(doc) {
      return doc != data.name
    });

    this.setState({
      clickedDocumentNames: this.state.clickedDocumentNames,
      clickedDocumentObjects: this.state.clickedDocumentObjects
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
      });
    }.bind(this));
  },
  render: function() {
    if ( this.state.submit === true ) {
      var rootRender =
        <div className="row text-center">
          <div className="col-lg-12">
            <DocumentsSubmittedListContainer
                partition={ this.state.partition }
                documentList={ this.state.clickedDocumentObjects }
                submit={ this.state.submit }
                onCancelDocumentList={ this.handleCancelDocumentList } />
          </div>
        </div>
    } else {
      var rootRender =
        <div className="row text-center">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <DirectoryContainer
                partition={ this.state.partition }
                folders={ this.state.folders }
                documents={ this.state.documents }
                onUpdateRender={ this.handleUpdateRender }
                pathList={ this.state.pathList }
                breadcrumbList={ this.state.breadcrumbList }
                onShowAddButton={ this.handleShowAddButton }
                documentToAdd={ this.state.documentToAdd }
                clickedDocumentNames={ this.state.clickedDocumentNames }
                cancelPath={ this.state.cancelPath } />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <AddButton
                addButton={ this.state.addButton }
                onUpdateDocumentList={ this.handleUpdateDocumentList }
                onCancelAddDocument={ this.handleCancelAddDocument }
                documentToAdd={ this.state.documentToAdd } />
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <DocumentsToSubmitListContainer
                documentList={ this.state.clickedDocumentObjects }
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