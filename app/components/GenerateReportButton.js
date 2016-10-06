var React = require('react');

var GenerateReportButton = React.createClass({
  render: function () {
    return (
      <button id="generate-button" className="btn btn-primary primary-button-color" onClick={ this.props.onGenerateReport }>Generate Report</button> 
    )
  }
});

module.exports = GenerateReportButton;
