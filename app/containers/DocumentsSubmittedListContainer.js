var React = require('react');
var Header = require('../components/Header');
var DocumentSubmitted = require('../components/DocumentSubmitted');
var CancelButton = require('../components/CancelButton');

var DocumentsSubmittedListContainer = React.createClass({
  handleSubmitForm: function() {
    var values = {};
    $.each($(this.refs.form).serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });

    var data_arr = [["document name", "interval to check", "pristine copy"]];

    this.props.documentList.forEach(function(doc) {
       temp_arr = [];
       temp_arr.push(doc.name);
       temp_arr.push(parseInt(values[doc.name + "-interval"]));
       if ( values[doc.name + "-copy-checked"] ) {
         temp_arr.push(1)
       } else {
         temp_arr.push(0)
       }
       return data_arr.push(temp_arr);
    }.bind(data_arr));

    var lineArray = [];

    data_arr.forEach(function (infoArray, index) {
      var line = infoArray.join(",");
      lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
    });

    var csvContent = lineArray.join("\n");

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);

  },
  render: function () {
    return (
      <div className="document-list">
        <Header
          title={ "Submitted Documents" } />

        <form id="submit-form" ref="form" onSubmit={ this.handleSubmitForm } className="form-horizontal center-block">
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