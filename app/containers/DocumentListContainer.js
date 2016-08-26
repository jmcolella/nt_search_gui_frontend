var React = require('react');
var DocumentAdded = require('../components/DocumentAdded');
var Header = require('../components/Header');

var DocumentListContainer = React.createClass({
  render: function () {
    return (
      <div className="document-list">
        <Header
          title={ "Added Documents" } />
        {
          this.props.documentList.map( function( doc ) {
            return <DocumentAdded
                      key={ doc.id }
                      data={ doc } />
          })
        }
      </div>
    )
  }
});

module.exports = DocumentListContainer;