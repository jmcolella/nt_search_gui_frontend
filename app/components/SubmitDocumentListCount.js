var React = require('react');

var SubmitDocumentListCount = React.createClass({
  render: function () {
    return (
      <div id="submit-document-count-sub-header" className="default-sub-header-height">
        <ol className="breadcrumb">
          <li>Documents to Submit: { this.props.documentList.length }</li>
        </ol>
      </div>
    )
  }
});

module.exports = SubmitDocumentListCount;