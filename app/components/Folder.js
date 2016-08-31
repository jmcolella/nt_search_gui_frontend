var React = require('react');

var Folder = React.createClass({
  handleClick: function() {
    this.props.onUpdateRender( "/folders/" + this.props.data.id, this.props.data.name )
  },
  render: function() {
    return (
      <div className="individual-folder-container">
        <i className="fa fa-folder-o fa-lg folder-document-icon-name folder-icon hidden" aria-hidden="true"></i>
        <h3 className="pointer folder-document-icon-name folder" onClick={this.handleClick} onMouseEnter={ this.props.onMouseOver } onMouseLeave={ this.props.onMouseDepart }><a className="folder-link">{ this.props.data.name }</a></h3>
      </div>
    )
  }
});

module.exports = Folder;