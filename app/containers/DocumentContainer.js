var React = require('react');
var Document = require('../components/Document');

var DocumentContainer = React.createClass({
  handleClickDocument: function () {
    this.props.onShowAddButton( this.props.data )
  },
  render: function () {
    return (
      <Document
          documentData={ this.props.data }
          clickedDocumentNames={ this.props.clickedDocumentNames }
          documentToAdd={ this.props.documentToAdd }
          onMouseOver={ this.props.onMouseOver }
          onMouseDepart={ this.props.onMouseDepart }
          onClickDocument={ this.handleClickDocument } />
    )
  }
});

module.exports = DocumentContainer;