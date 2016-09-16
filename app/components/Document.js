var React = require('react');
var AddButtonNew = require('../components/AddButtonNew');

var Document = React.createClass({
  render: function () {
    return (
      <li className="list-group-item">
        <i className="fa fa-file-o fa-lg inline-block-style document-icon" aria-hidden="true"></i>
        <h4 id={ "document-" + this.props.documentData.id } className="inline-block-style">{ this.props.documentData.name }</h4>

        <AddButtonNew
            documentName={ this.props.documentData.name }
            clickedDocumentNames={ this.props.clickedDocumentNames }
            onClickAddButton={ this.props.onClickAddButton } />
      </li>
    )
  }
});

module.exports = Document;