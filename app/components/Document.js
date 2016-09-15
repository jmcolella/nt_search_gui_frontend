var React = require('react');

var Document = React.createClass({
  render: function () {
    if( this.props.clickedDocumentNames.includes( this.props.documentData.name ) || this.props.documentToAdd && this.props.documentToAdd.id === this.props.documentData.id ) {
      var render =
        <h4 id={ "document-" + this.props.documentData.id } className="grey-text-color dfolder-document-icon-name">{ this.props.documentData.name }</h4>
    } else {
      var render =
        <div>
          <i className="fa fa-file-o fa-lg inline-block-style document-icon hidden" aria-hidden="true"></i>
          <h4 id={ "document-" + this.props.documentData.id } className="pointer inline-block-style" onClick={ this.props.onClickDocument } onMouseEnter={ this.props.onMouseOver } onMouseLeave={ this.props.onMouseDepart }>{ this.props.documentData.name }</h4>
        </div>
    }
    return (
      <div className="individual-document-container">
        { render }
      </div>
    )
  }
});

module.exports = Document;