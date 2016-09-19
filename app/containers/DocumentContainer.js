var React = require('react');
var Document = require('../components/Document');

var DocumentContainer = React.createClass({
  handleClickAddButton: function () {
    this.props.onUpdateDocumentList( this.props.data )
  },
  render: function () {
    return (
      <Document
          documentData={ this.props.data }
          clickedDocumentNames={ this.props.clickedDocumentNames }
          documentToAdd={ this.props.documentToAdd }
          addButton={ this.props.addButton }
          onClickAddButton={ this.handleClickAddButton } />
    )
  }
});

module.exports = DocumentContainer;