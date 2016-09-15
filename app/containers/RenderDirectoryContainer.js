var React = require('react');
var DirectoryContainer = require('../containers/DirectoryContainer');
var AddButtonContainer = require('../containers/AddButtonContainer');
var DocumentsToSubmitListContainer = require('../containers/DocumentsToSubmitListContainer');

var RenderDirectoryContainer = React.createClass({
  render: function () {
    return (
      <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4">
          <DirectoryContainer
              partition={ this.props.partition }
              folders={ this.props.folders }
              documents={ this.props.documents }
              onUpdateRender={ this.props.onUpdateRender }
              pathList={ this.props.pathList }
              breadcrumbList={ this.props.breadcrumbList }
              onShowAddButton={ this.props.onShowAddButton }
              documentToAdd={ this.props.documentToAdd }
              clickedDocumentNames={ this.props.clickedDocumentNames }
              cancelPath={ this.props.cancelPath } />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">
          <AddButtonContainer
              addButton={ this.props.addButton }
              onUpdateDocumentList={ this.props.onUpdateDocumentList }
              onCancelAddDocument={ this.props.onCancelAddDocument }
              documentToAdd={ this.props.documentToAdd } />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4">
          <DocumentsToSubmitListContainer
              documentList={ this.props.documentList }
              onSubmitDocumentList={ this.props.onSubmitDocumentList }
              submit={ this.props.submit }
              onRemoveDocument={ this.props.onRemoveDocument } />
        </div>
      </div>
    )
  }
});

module.exports = RenderDirectoryContainer;