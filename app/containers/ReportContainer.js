var React = require('react');
var Header = require('../components/Header');
var ReportButtonsContainer = require('../containers/ReportButtonsContainer');
var ReportListContainer = require('../containers/ReportListContainer');

var ReportContainer = React.createClass({
  getInitialState: function () {
    return {
      button: true,
      report: false
    }
  },
  handleGenerateReport: function () {
    // potentially open socket here, if not, open it in the child report component
    this.setState({
      button: false,
      report: true
    });
  },
  render: function () {
    if ( this.state.button ) {
      var reportRender = 
        <ReportButtonsContainer
          handleGenerateReport={ this.handleGenerateReport }
          handleCancelReport={ this.props.handleCancelReport } />
    } else {
      var reportRender = 
        <ReportListContainer />
    }
    return (
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <Header
            title={ "Report" } />
        </div>

        <div className="panel-body">
          { reportRender }
        </div>
      </div>
    )
  }
});

module.exports = ReportContainer;
