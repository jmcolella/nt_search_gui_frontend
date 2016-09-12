var React = require('react');

var SubmitDocumentListCount = React.createClass({
  render: function () {
    return (
      <div id="submit-document-count-sub-header" className="breadcrumb">
        <p>Documents to Submit: { this.props.documentList.length }</p>
      </div>
    )
  }
});

module.exports = SubmitDocumentListCount;