var React = require('react');
var Header = require('../components/Header');
var ReportButtonsContainer = require('../containers/ReportButtonsContainer');
var ReportListContainer = require('../containers/ReportListContainer');

var ReportContainer = React.createClass({
  getInitialState: function () {
    return {
      messages: [],
    }
  },
  componentDidMount: function () {
    var socket = new WebSocket("ws://localhost:3001");

    socket.onopen = function ( event ) {
      console.log("open connection");
    }

    socket.onmessage = function ( event ) {
      var message = event.data.split("}")[0] + "}";

      this.state.messages.push( JSON.parse( message ) );

      this.setState({
        messages: this.state.messages
      });
    }.bind(this);
  },
  handleGenerateReport: function () {
    // may use this in the DocumentsSubmitted List after the submit button is clicked
    this.setState({
      button: false,
      report: true
    });
  },
  render: function () {
    return (
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <Header
            title={ "Report" } />
        </div>

        <div className="panel-body">
          <ReportListContainer
            messages={ this.state.messages } />
        </div>
      </div>
    )
  }
});

module.exports = ReportContainer;
