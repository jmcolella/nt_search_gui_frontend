var React = require('react');
var GenerateReportButton = require('../components/GenerateReportButton');
var CancelButton = require('../components/CancelButton');

var ReportButtonsContainer = React.createClass({
  render: function () {
    return (
      <div>
        <GenerateReportButton
           onGenerateReport={ this.props.handleGenerateReport } />

        <br/>

        <CancelButton
           id={ "return-button" }
           buttonTitle={ "return" }
           onCancelClick={ this.props.handleCancelReport } />
      </div>
    )
  }
});

module.exports = ReportButtonsContainer;
