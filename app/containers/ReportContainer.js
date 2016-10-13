var React = require('react');
var Header = require('../components/Header');
var ReportButtonsContainer = require('../containers/ReportButtonsContainer');
var ReportListContainer = require('../containers/ReportListContainer');

var ReportContainer = React.createClass({
  getInitialState: function () {
    return {
      messages: [],
      checkArr: [],
      incomingMsg: {}
    }
  },
  componentDidMount: function () {
    var socket = new WebSocket("ws://localhost:3001");

    socket.onopen = function ( event ) {
      console.log("open connection");
    }

    socket.onmessage = function ( event ) {
      var message = JSON.parse( event.data.split("}")[0] + "}" );
      console.log( message );

      this.setIncomingMessage( message );

      if( this.state.checkArr.length === 0 ) { 
        this.state.checkArr.push( message.filename )
        this.state.messages.push( message );
      } else {
        if ( this.state.checkArr.includes( message.filename ) ) {
          this.state.messages.forEach( function( m ) {
            if ( m.status !== message.status ) {
              m.status = message.status 
            }
          });
        } else {
          this.state.checkArr.push( message.filename );
          this.state.messages.push( message );
        }
      }

      this.setState({
        messages: this.state.messages,
        checkArr: this.state.checkArr 
      });

    }.bind(this);
  },
  setIncomingMessage: function ( message ) {
    this.setState({
      incomingMsg: message 
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
            messages={ this.state.messages }
            incomingMsg={ this.state.incomingMsg } />
        </div>
      </div>
      )
}
});

module.exports = ReportContainer;
