var React = require('react');
var Header = require('../components/Header');
var SubmitDocumentListCount = require('../components/SubmitDocumentListCount');
var DocumentToSubmitContainer = require('../containers/DocumentToSubmitContainer');
var SubmitDocumentListButton = require('../components/SubmitDocumentListButton');

var DocumentsToSubmitListContainer = React.createClass({
  render: function () {
    if ( this.props.documentList.length > 0 && this.props.submit === false ) {
      var submitDocumentListButton =
          <SubmitDocumentListButton
              onSubmitDocumentList={ this.props.onSubmitDocumentList } />
    }
    return (
      <div id="document-list " className="grey-text-color default-list-height panel panel-default">
        <div className="panel-heading">
          <Header
            title={ "Documents to Submit" } />
        </div>

        <div className="panel-body">
            <SubmitDocumentListCount
                documentList={ this.props.documentList } />

            <div id="submit-document-list" className="default-document-list">
              <ul className="list-group">
                {
                  this.props.documentList.map( function( obj ) {
                    return <DocumentToSubmitContainer
                              key={ obj.doc.id }
                              data={ obj.doc }
                              onRemoveDocument={ this.props.onRemoveDocument }
                              submit={ this.props.submit } />
                  }.bind(this))
                }
              </ul>
          </div>

          <div id="submit-document-list-button-container">
            { submitDocumentListButton }
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DocumentsToSubmitListContainer;