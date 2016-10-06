var React = require('react');
var GenerateReportButton = require('../components/GenerateReportButton');
var CancelButton = require('../components/CancelButton');

var ReportButtonsContainer = React.createClass({
  render: function () {
    return (
      <div>
        <GenerateReportButton
           onGenerateReport={ this.props.handleGenerateReport } />

         <CancelButton
           buttonTitle={ "return" }
           onCancelClick={ this.props.handleCancelReport } />
      </div>
    )
  }
});

module.exports = ReportButtonsContainer;
