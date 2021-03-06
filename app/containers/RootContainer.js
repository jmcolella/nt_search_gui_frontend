var React = require('react');
var ReactDOM = require("react-dom");
var findDOMNode = ReactDOM.findDOMNode;
var RenderDirectoryContainer = require('../containers/RenderDirectoryContainer');
var RenderDocumentsSubmittedListContainer = require('../containers/RenderDocumentsSubmittedListContainer');
var MediationContainer = require('../containers/MediationContainer');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var RootContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      partition: "partition-" + this.props.location.pathname.split("/")[2],
      folders: [],
      documents: [],
      pathList: [],
      breadcrumbList: [],
      clickedDocumentObjects: [],
      clickedDocumentNames: [],
      submit: false,
      cancelPath: "",
      mediation: false
    };
  },
  componentWillMount: function() {
    this.state.breadcrumbList.push( {
      path: ".",
      name: "."
    } );

    serverRequestHelpers.getPartitionFilesHelper( this.props.location.pathname ).then( function( response ) {
      this.state.pathList.push( "." );

      this.setState({
        folders: response.data.folders || [],
        documents: response.data.documents || [],
        pathList: this.state.pathList,
        breadcrumbList: this.state.breadcrumbList
      });
   }.bind(this));
  },
  handleUpdateRender: function( folderName ) {
     if ( typeof( folderName ) === "string" ) {
       this.state.pathList.push( folderName );
       breadcrumbPath = this.state.pathList.slice( 1, this.state.pathList.length );
       this.state.breadcrumbList.push( {
          path: breadcrumbPath.join("/"),
          name: folderName
       } );
     } else {
       var sliceBreadCrumbIdx = this.state.breadcrumbList.indexOf( folderName ) + 1;
       this.state.breadcrumbList.splice( sliceBreadCrumbIdx , this.state.breadcrumbList.length - sliceBreadCrumbIdx );

       var slicePathIdx = this.state.pathList.indexOf( folderName.name ) + 1;
       this.state.pathList.splice( slicePathIdx, this.state.pathList.length - slicePathIdx );
    }

    var path = this.state.breadcrumbList[this.state.breadcrumbList.length - 1].path;

    serverRequestHelpers.updateRenderFilesHelper( this.props.location.pathname, path ).then( function( response ) {
      this.setState({
        folders: response.data.folders || [],
        documents: response.data.documents || [],
        pathList: this.state.pathList,
        breadcrumbList: this.state.breadcrumbList,
        documentPath: this.state.documentPath
     })
    }.bind(this));
  },
  handleUpdateDocumentList: function( data ) {
    var relativePath = this.state.pathList.map( function( path ) {
      return path
    });

    relativePath.push( data );
    this.state.clickedDocumentNames.push( data );
    this.state.clickedDocumentObjects.push(
      { doc: data,
        relativePath: relativePath.join("/")
      }
    );

    this.setState({
      clickedDocumentObjects: this.state.clickedDocumentObjects,
      clickedDocumentNames: this.state.clickedDocumentNames,
    });
  },
  handleRemoveDocument: function( data ) {
    this.state.clickedDocumentObjects = this.state.clickedDocumentObjects.filter( function(obj) {
      return obj.doc != data
    });
    this.state.clickedDocumentNames = this.state.clickedDocumentNames.filter( function(doc) {
      return doc != data
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
  handleShowMediation: function () {
    this.setState({
      submit: false,
      mediation: true
    });
  },
  handleCancelDocumentList: function() {
    serverRequestHelpers.cancelDocumentListHelper( this.props.location.pathname, this.state.cancelPath ).then( function( response ) {
      this.setState({
        folders: response.data.folders || [],
        documents: response.data.documents || [],
        cancelPath: "",
        submit: false
      });
    }.bind(this));
  },
  render: function() {
    if ( this.state.submit === true ) {
      var rootRender =
        <RenderDocumentsSubmittedListContainer
          partition={ this.state.partition }
          documentList={ this.state.clickedDocumentObjects }
          submit={ this.state.submit }
          handleShowMediation={ this.handleShowMediation }
          onCancelDocumentList={ this.handleCancelDocumentList } />
    } else if ( this.state.mediation == true ) {
      var rootRender =
        <MediationContainer />
    } else {
          var rootRender =
            <RenderDirectoryContainer
              partition={ this.state.partition }
              folders={ this.state.folders }
              documents={ this.state.documents }
              pathList={ this.state.pathList }
              breadcrumbList={ this.state.breadcrumbList }
              clickedDocumentNames={ this.state.clickedDocumentNames }
              cancelPath={ this.state.cancelPath }
              documentList={ this.state.clickedDocumentObjects }
              submit={ this.state.submit }
              onUpdateRender={ this.handleUpdateRender }
              onUpdateDocumentList={ this.handleUpdateDocumentList }
              onSubmitDocumentList={ this.handleSubmitDocumentList }
              onRemoveDocument={ this.handleRemoveDocument } />
            }
  return (
    <div id="root-container" className="container-fluid">

      { rootRender }

    </div>
    )
}
});

module.exports = RootContainer;
