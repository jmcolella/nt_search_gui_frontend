var React = require('react');
var Header = require('../components/Header');
var SubmitDocumentListCount = require('../components/SubmitDocumentListCount');
var DocumentToSubmit = require('../components/DocumentToSubmit');
var SubmitDocumentListButton = require('../components/SubmitDocumentListButton');

var DocumentsToSubmitListContainer = React.createClass({
  render: function () {
    if ( this.props.documentList.length > 0 && this.props.submit === false ) {
      var submitDocumentListButton =
          <SubmitDocumentListButton
              onSubmitDocumentList={ this.props.onSubmitDocumentList } />
    }
    return (
      <div className="document-list panel panel-default">
        <div className="panel-heading">
          <Header
            title={ "Documents to Submit" } />
        </div>

        <div className="panel-body submit-document-list">
          <SubmitDocumentListCount
              documentList={ this.props.documentList } />
          {
            this.props.documentList.map( function( obj ) {
              return <DocumentToSubmit
                        key={ obj.doc.id }
                        data={ obj.doc }
                        onRemoveDocument={ this.props.onRemoveDocument }
                        submit={ this.props.submit } />
            }.bind(this))
          }

          { submitDocumentListButton }
        </div>
      </div>
    )
  }
});

module.exports = DocumentsToSubmitListContainer;