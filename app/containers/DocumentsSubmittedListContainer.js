var React = require('react');
var Header = require('../components/Header');
var DocumentSubmitted = require('../components/DocumentSubmitted');
var CancelButton = require('../components/CancelButton');

var DocumentsSubmittedListContainer = React.createClass({
  render: function () {
    return (
      <div className="document-list">
        <Header
          title={ "Submitted Documents" } />

        <form className="form-horizontal center-block">
          <div className="form-group form-group-lg">
            <label className="col-lg-4 control-label form-center">document name</label>
            <label className="col-lg-4 control-label form-center">interval to check</label>
            <label className="col-lg-4 control-label form-center">save a backup?</label>
          </div>
          {
            this.props.documentList.map( function( doc ) {
              return <DocumentSubmitted
                        key={ doc.id }
                        data={ doc } />
            }.bind(this))
          }
          <input className="btn btn-default" type="submit" value="submit list" />
        </form>

        <CancelButton
            onCancelDocumentList={ this.props.onCancelDocumentList } />

      </div>
    )
  }
});

module.exports = DocumentsSubmittedListContainer;