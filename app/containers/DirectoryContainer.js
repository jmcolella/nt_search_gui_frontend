var React = require('react');
var Folder = require('../components/Folder');
var Document = require('../components/Document');
var BreadCrumbsContainer = require('../containers/BreadCrumbsContainer');

var DirectoryContainer = React.createClass({
  handleMouseOver: function(e) {
    $(e.target).closest("div").find("i").removeClass("hidden");
  },
  handleMouseDepart: function(e) {
    $(e.target).closest("div").find("i").addClass("hidden");
  },
  render: function() {
    return (
      <div className="directory-list panel panel-default">
        <div className="panel-heading">
          <BreadCrumbsContainer
            breadcrumbList={ this.props.breadcrumbList }
            onUpdateRender={ this.props.onUpdateRender } />
        </div>

        <div className="panel-body">
          <div className="list-of-folders">
            {
              this.props.folders.map( function( folder ) {
                return <Folder
                          key={folder.id}
                          data={folder}
                          onUpdateRender={this.props.onUpdateRender}
                          onMouseOver={ this.handleMouseOver }
                          onMouseDepart={ this.handleMouseDepart } />
              }.bind(this))
            }
          </div>

          <div className="list-of-documents">
            {
              this.props.documents.map( function( doc ) {
                return <Document
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