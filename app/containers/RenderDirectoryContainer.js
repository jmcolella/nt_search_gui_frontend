var React = require('react');
var DirectoryContainer = require('../containers/DirectoryContainer');
var AddButtonContainer = require('../containers/AddButtonContainer');
var DocumentsToSubmitListContainer = require('../containers/DocumentsToSubmitListContainer');

var RenderDirectoryContainer = React.createClass({
  render: function () {
    return (
      <div className="row text-center">
        <div className="col-sm-6">
          <DirectoryContainer
              partition={ this.props.partition }
              folders={ this.props.folders }
              documents={ this.props.documents }
              onUpdateRender={ this.props.onUpdateRender }
              pathList={ this.props.pathList }
              breadcrumbList={ this.props.breadcrumbList }
              onShowAddButton={ this.props.onShowAddButton }
              addButton={ this.props.addButton }
              onUpdateDocumentList={ this.props.onUpdateDocumentList }
              documentToAdd={ this.props.documentToAdd }
              clickedDocumentNames={ this.props.clickedDocumentNames }
              cancelPath={ this.props.cancelPath } />
        </div>

        <div className="col-sm-6">
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
