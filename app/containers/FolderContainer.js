var React = require('react');
var Folder = require('../components/Folder');

var FolderContainer = React.createClass({
  handleClickFolder: function() {
    this.props.onUpdateRender( this.props.data )
  },
  render: function() {
    return (
      <Folder
          folder={ this.props.data }
          onMouseOver={ this.props.onMouseOver }
          onMouseDepart={ this.props.onMouseDepart }
          onClickFolder={ this.handleClickFolder } />
    )
  }
});

module.exports = FolderContainer;