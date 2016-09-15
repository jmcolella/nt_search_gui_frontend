var React = require('react');
var DocumentToSubmit = require('../components/DocumentToSubmit');

var DocumentToSubmitContainer = React.createClass({
  hanldeClickDocumentToSubmit: function () {
    this.props.onRemoveDocument( this.props.data );
  },
  render: function () {
    return (
      <DocumentToSubmit
          data={ this.props.data }
          onClickDocumentToSubmit={ this.hanldeClickDocumentToSubmit } />
    )
  }
});

module.exports = DocumentToSubmitContainer;