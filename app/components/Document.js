var React = require('react');
var AddButtonNew = require('../components/AddButtonNew');

var Document = React.createClass({
  render: function () {
    return (
      <li className="list-group-item">
        <i className="fa fa-file-o fa-lg inline-block-style document-icon" aria-hidden="true"></i>
        <h4 id={ "document-" + this.props.documentData } className="inline-block-style">{ this.props.documentData }</h4>

        <AddButtonNew
            documentName={ this.props.documentData }
            clickedDocumentNames={ this.props.clickedDocumentNames }
            onClickAddButton={ this.props.onClickAddButton } />
      </li>
    )
  }
});

module.exports = Document;
