var React = require('react');
var DocumentAdded = require('../components/DocumentAdded');
var Header = require('../components/Header');
var SubmitDocumentListButton = require('../components/SubmitDocumentListButton');

var DocumentListContainer = React.createClass({
  render: function () {
    if ( this.props.documentList.length > 0 && this.props.submit === false ) {
      var submitDocumentListButton =
          <SubmitDocumentListButton
              onSubmitDocumentList={ this.props.onSubmitDocumentList } />
    }
    if ( this.props.submit === true ) {
      var header = "Documents to submit"
    } else {
      var header = "Added Documents"
    }
    return (
      <div className="document-list">
        <Header
          title={ header } />
        {
          this.props.documentList.map( function( doc ) {
            return <DocumentAdded
                      key={ doc.id }
                      data={ doc } />
          })
        }

        { submitDocumentListButton }
      </div>
    )
  }
});

module.exports = DocumentListContainer;