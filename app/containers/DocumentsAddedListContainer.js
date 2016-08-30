var React = require('react');
var Header = require('../components/Header');
var DocumentAdded = require('../components/DocumentAdded');
var CancelButton = require('../components/CancelButton');

var DocumentsAddedListContainer = React.createClass({
  render: function () {
    return (
      <div className="document-list">
        <Header
          title={ "Documents to submit" } />
        {
          this.props.documentList.map( function( doc ) {
            return <DocumentAdded
                      key={ doc.id }
                      data={ doc } />
          })
        }

        <CancelButton
            onCancelDocumentList={ this.props.onCancelDocumentList } />

      </div>
    )
  }
});

module.exports = DocumentsAddedListContainer;