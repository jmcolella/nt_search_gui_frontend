var React = require('react');
var Header = require('../components/Header');
var ReportButtonsContainer = require('../containers/ReportButtonsContainer');
var ReportListContainer = require('../containers/ReportListContainer');

var ReportContainer = React.createClass({
  getInitialState: function () {
    return {
      messages: [],
      button: true,
      report: false
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
          <ul>
          {
             this.state.messages.map( function( message, index ) {
               return <li>{ message.filename } { message.status } { message.time }</li> 
             }) 
          } 
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = ReportContainer;
