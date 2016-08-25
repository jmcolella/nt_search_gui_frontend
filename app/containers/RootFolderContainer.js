var React = require('react');
var Folder = require('../components/Folder');
var Document = require('../components/Document');
var GoBackButton = require('../components/GoBackButton')

var RootFolderContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      folders: [],
      documents: [],
      pathList: []
    }
  },
  componentWillMount: function() {
    $.ajax({
      url: "http://localhost:3000" + this.props.location.pathname,
      type: "GET"
    }).done( function( response ) {
      this.state.pathList.push( this.props.location.pathname );

      if ( response.folders ) {
        var updatedFolders = response.folders
      } else {
        var updatedFolders = response.sub_folders
      }

      this.setState({
        folders: updatedFolders,
        documents: response.documents || [],
        pathList: this.state.pathList
      })
    }.bind(this));
  },
  handleUpdateRender: function( folder_id ) {
    $.ajax({
      url: "http://localhost:3000/folders/" + folder_id,
      type: "GET",
    }).done( function( response ) {
      this.state.pathList.push( "/folders/" + folder_id );

      this.setState({
        folders: response.sub_folders,
        documents: response.documents || [],
        pathList: this.state.pathList
      })

    }.bind(this));
  },
  handleGoBack: function() {
    $.ajax({
      url: "http://localhost:3000" + this.state.pathList[this.state.pathList.length - 2],
      type: "GET"
    }).done( function( response ) {
      if ( response.folders ) {
        var updatedFolders = response.folders
      } else {
        var updatedFolders = response.sub_folders
      }

      this.setState({
        folders: updatedFolders,
        documents: response.documents || [],
        pathList: this.state.pathList.slice(0, this.state.pathList.length - 1)
      })
    }.bind(this));
  },
  render: function() {
    if ( this.state.pathList.length > 1 ) {
      var goBackButton =
        <GoBackButton
            onGoBack={ this.handleGoBack } />
    }
    return (
      <div className="container text-center">
        <div className="row">
          {
            this.state.folders.map( function( folder ) {
              return <Folder
                        key={folder.id}
                        data={folder}
                        onUpdateRender={this.handleUpdateRender} />
            }.bind(this))
          }
        </div>

        <div className="row">
          {
            this.state.documents.map( function( doc ) {
              return <Document
                        key={doc.id}
                        data={doc} />
            }.bind(this))
          }
        </div>

        <div className="row">
          { goBackButton }
        </div>
      </div>
    )
  }
});

module.exports = RootFolderContainer;