var React = require('react');

var Folder = React.createClass({
  render: function () {
    return (
      <li className="individual-folder-container list-group-item">
        <i className="fa fa-folder-o fa-lg folder-document-icon-name folder-icon" aria-hidden="true"></i>
        <h4 className="pointer inline-block-style folder" onClick={this.props.onClickFolder}><a className="dark-link">{ this.props.folder.name }</a></h4>
      </li>
    )
  }
});

module.exports = Folder;