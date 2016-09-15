var React = require('react');
var Header = require('../components/Header');
var BreadCrumbsListContainer = require('../containers/BreadCrumbsListContainer');
var FolderContainer = require('../containers/FolderContainer');
var DocumentContainer = require('../containers/DocumentContainer');

var DirectoryContainer = React.createClass({
  handleMouseOver: function(e) {
    $(e.target).closest("div").find("i").removeClass("hidden");
  },
  handleMouseDepart: function(e) {
    $(e.target).closest("div").find("i").addClass("hidden");
  },
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

          <div id="list-of-folders">
            {
              this.props.folders.map( function( folder ) {
                return <FolderContainer
                          key={folder.id}
                          data={folder}
                          onUpdateRender={this.props.onUpdateRender}
                          onMouseOver={ this.handleMouseOver }
                          onMouseDepart={ this.handleMouseDepart } />
              }.bind(this))
            }
          </div>

          <div id="list-of-documents">
            {
              this.props.documents.map( function( doc ) {
                return <DocumentContainer
                          key={doc.id}
                          data={doc}
                          onShowAddButton={this.props.onShowAddButton}
                          documentToAdd={ this.props.documentToAdd }
                          clickedDocumentNames={ this.props.clickedDocumentNames }
                          onMouseOver={ this.handleMouseOver }
                          onMouseDepart={ this.handleMouseDepart } />
              }.bind(this))
            }
          </div>

        </div>
      </div>
    )
  }
});

module.exports = DirectoryContainer;