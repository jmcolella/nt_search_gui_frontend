var React = require('react');
var Header = require('../components/Header');
var DocumentSubmittedContainer = require('../containers/DocumentSubmittedContainer');
var GenerateMediationButton = require('../components/GenerateMediationButton');
var CancelButton = require('../components/CancelButton');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var DocumentsSubmittedListContainer = React.createClass({
  getInitialState: function () {
    return {
      form: true,
      generateMediation: false,
      returnForm: false
    }
  },
  handleSubmitForm: function( e ) {
    e.preventDefault();

    var values = {};
    $.each($(this.refs.form).serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });

    var data_arr = [[this.props.documentList.length]];

    var that = this

    this.props.documentList.forEach( function ( obj ) {
      temp_arr = [];
      temp_arr.push(parseInt(that.props.partition.split("-")[1]));
      temp_arr.push(obj.relativePath);
      temp_arr.push(values[obj.doc + "-interval"]);
      if ( values[obj.doc + "-copy-checked"] ) {
        temp_arr.push(1)
      } else {
        temp_arr.push(0)
      }
      return data_arr.push(temp_arr);
    }.bind(data_arr));

    var lineArray = [];

    data_arr.forEach(function (infoArray, index) {
      var line = infoArray.join(",");
      lineArray.push( line );
    });

    var csvContent = lineArray.join("\n");

    serverRequestHelpers.postSubmittedDocumentsHelper( csvContent ).then( function( response ) {
      this.toggleGenerateMediation();
    }.bind(this));

  },
  toggleGenerateMediation: function () {
    this.setState({
      form: false,
      generateReport: true,
      returnFrom: true
    });
  },
  handleGenerateMediation: function () {
    this.props.onShowMediation();
  },
  toggleReturnForm: function () {
    this.setState({
      form: true,
      generateReport: false
    });
  },
  render: function () {
    if ( this.state.form === true ) {
      var formReport =
        <div>
          <form id="submit-form" ref="form" onSubmit={ this.handleSubmitForm } className="form-horizontal center-block">
            <div className="form-group form-group-lg">
              <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">document path</label>
              <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">interval to check</label>
              <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">save a backup?</label>
            </div>
            {
              this.props.documentList.map( function( obj, index ) {
                return <DocumentSubmittedContainer
                          key={ index }
                          data={ obj } />
              })
            }
            <input className="btn btn-primary primary-button-color" type="submit" value="submit list" />
          </form>
        </div>
    } else {
      var formReport = <GenerateMediationButton
                          onGenerateMediation={ this.handleGenerateMediation } />
    }
    return (
      <div>
        <div className="document-list panel panel-default">
          <div className="panel-heading">
            <Header
              title={ "Submitted Documents" } />
          </div>

          <div className="panel-body">
            { formReport }
          </div>

        </div>

        <CancelButton
          buttonTitle={ this.state.generateMediation ? "return to form" : "cancel" }
          onCancelClick={ this.state.generateMediation ? this.toggleReturnForm : this.props.onCancelDocumentList } />
      </div>
      )
  }
});

module.exports = DocumentsSubmittedListContainer;
