var React = require('react');

var ReportContainer = React.createClass({
  getInitialState: function () {
    return {
      button: true,
      report: false
    }
  },
  componentDidMount: function () {
    debugger;
  },
  render: function () {
    return (
      <div className="container">
        Report Container
      </div>
    )
  }
});

module.exports = ReportContainer;
