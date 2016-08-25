var React = require('react');
var Folder = require('../components/Folder');
var Document = require('../components/Document');


var RootFolderContainer = React.createClass({
  render: function() {

    return (
      <div className="container text-center">
        <div className="row">
          {
            this.props.folders.map( function( folder ) {
              return <Folder
                        key={folder.id}
                        data={folder}
                        onUpdateRender={this.props.onUpdateRender} />
            }.bind(this))
          }
        </div>

        <div className="row">
          {
            this.props.documents.map( function( doc ) {
              return <Document
                        key={doc.id}
                        data={doc} />
            }.bind(this))
          }
        </div>

      </div>
    )
  }
});

module.exports = RootFolderContainer;