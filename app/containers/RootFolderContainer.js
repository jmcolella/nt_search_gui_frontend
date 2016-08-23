var React = require('react');
var Folder = require('../components/Folder')

var RootFolderContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      folders: []
    }
  },
  componentWillMount: function() {
    $.ajax({
      url: "http://localhost:3000" + this.props.location.pathname,
      type: "GET"
    }).done( function( response ) {
      this.setState({
        folders: response.folders
      })
    }.bind(this));
  },
  render: function() {
    return (
      <div className="container text-center">
        <div className="row">
          {
            this.state.folders.map( function( folder ) {
              return <Folder
                        key={folder.id}
                        data={folder} />
            })
          }
        </div>
      </div>
    )
  }
});

module.exports = RootFolderContainer;