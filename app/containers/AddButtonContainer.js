var React = require('react');
var AddButton = require('../components/AddButton');

var AddButtonContainer = React.createClass({
  handleClickAddButton: function () {
    this.props.onUpdateDocumentList( this.props.documentToAdd )
  },
  render: function () {
    return (
      <AddButton
          addButton={ this.props.addButton }
          onClickAddButton={ this.handleClickAddButton }
          onCancelAddDocument={ this.props.onCancelAddDocument } />
    )
  }
});

module.exports = AddButtonContainer;