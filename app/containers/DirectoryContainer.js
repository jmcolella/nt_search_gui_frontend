var React = require('react');
var Header = require('../components/Header');
var BreadCrumbsListContainer = require('../containers/BreadCrumbsListContainer');
var FolderContainer = require('../containers/FolderContainer');
var DocumentContainer = require('../containers/DocumentContainer');

var DirectoryContainer = React.createClass({
  render: function() {
    return (
      <div id="directory-list" className="default-list-height panel panel-default">
        <div className="panel-heading">
          <Header
              title={ this.props.partition } />
        </div>

        <div className="panel-body">
          <BreadCrumbsListContainer
            breadcrumbList={ this.props.breadcrumbList }
            onUpdateRender={ this.props.onUpdateRender } />

          <div id="list-of-files" className="default-document-list">
            <ul className="list-group">
              {
                this.props.folders.map( function( folder ) {
                  return <FolderContainer
                            key={folder.id}
                            data={folder}
                            onUpdateRender={this.props.onUpdateRender} />
                }.bind(this))
              }

              {
                this.props.documents.map( function( doc ) {
                  return <DocumentContainer
                            key={doc.id}
                            data={doc}
                            onShowAddButton={this.props.onShowAddButton}
                            addButton={ this.props.addButton }
                            documentToAdd={ this.props.documentToAdd }
                            onUpdateDocumentList={ this.props.onUpdateDocumentList }
                            clickedDocumentNames={ this.props.clickedDocumentNames } />
                }.bind(this))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DirectoryContainer;