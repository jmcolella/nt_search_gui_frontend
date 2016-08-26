var React = require('react');
var Folder = require('../components/Folder');
var Document = require('../components/Document');
var Header = require('../components/Header');


var RootFolderContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Header
          title={ "Directory" } />

        <div>
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
    )
  }
});

module.exports = RootFolderContainer;