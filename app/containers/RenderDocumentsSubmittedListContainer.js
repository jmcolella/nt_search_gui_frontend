var React = require('react');
var DocumentsSubmittedListContainer = require('../containers/DocumentsSubmittedListContainer');

var RenderDocumentsSubmitedListContainer = React.createClass({
  render: function () {
    return (
      <div className="row text-center">
        <div className="col-lg-12">
          <DocumentsSubmittedListContainer
              partition={ this.props.partition }
              documentList={ this.props.documentList }
              submit={ this.props.submit }
              onShowReport={ this.props.handleShowReport }
              onCancelDocumentList={ this.props.onCancelDocumentList } />
        </div>
      </div>
    )
  }
});

module.exports = RenderDocumentsSubmitedListContainer;
