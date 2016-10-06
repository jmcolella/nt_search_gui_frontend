var React = require('react');

var GenerateReportButton = React.createClass({
  render: function () {
    return (
      <button className="btn btn-primary primary-button-color"i onClick={ this.props.onGenerateReport }>Generate Report</button> 
    )
  }
});

module.exports = GenerateReportButton;
