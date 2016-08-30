var React = require('react');
var Folder = require('../components/Folder');
var Document = require('../components/Document');
var Header = require('../components/Header');
var GoBackButton = require('../components/GoBackButton');

var DirectoryContainer = React.createClass({
  render: function() {
    if ( this.props.pathList.length > 1 && this.props.cancelPath.length === 0 ) {
        var goBackButton =
          <GoBackButton
              onGoBack={ this.props.onGoBack } />
    }
    return (
      <div className="directory-list panel panel-default">
        <div className="panel-heading">
          <Header
            title={ "Directory" } />
        </div>

        <div className="panel-body">

          <div id="back-button-container">
            { goBackButton }
          </div>

          <div className="list-of-folders">
            {
              this.props.folders.map( function( folder ) {
                return <Folder
                          key={folder.id}
                          data={folder}
                          onUpdateRender={this.props.onUpdateRender} />
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
                      clickedDocuments={ this.props.clickedDocuments } />
              }.bind(this))
            }
          </div>

        </div>
      </div>
    )
  }
});

module.exports = DirectoryContainer;