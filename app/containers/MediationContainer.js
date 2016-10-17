var React = require('react');
var Header = require('../components/Header');
var MediationListContainer = require('../containers/MediationListContainer');
var GenerateMediationButton = require('../components/GenerateMediationButton');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var MediationContainer = React.createClass({
  getInitialState: function () {
    return {
      mediation: false,
      messages: [],
      checkArr: [],
      incomingMsg: {}
    }
  },
  handleGenerateMediation: function ( close_socket ) {
    this.setState({
      mediation: true 
    }); 

    if ( close_socket ) {
      socket.close();
      socket.onclose = function ( event ) {
        debugger; 
      }
    }
    var socket = new WebSocket("ws://localhost:3001");

    socket.onopen = function ( event ) {
      console.log("open connection");
    }

    if ( ! close_socket ) {
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
    }
  },
  setIncomingMessage: function ( message ) {
    this.setState({
      incomingMsg: message
    });
  },
  handleStopMediation: function () {
    this.handleGenerateMediation( true );
  },
  render: function () {
    if ( this.state.mediation ) {
      var mediation = <MediationListContainer
        messages={ this.state.messages }
        incomingMsg={ this.state.incomingMsg } />

      } else {
        var mediation = <GenerateMediationButton
          onGenerateMediation={ this.handleGenerateMediation } />
        }
  return (
    <div className="panel panel-default text-center">
      <div className="panel-heading">
        <Header
          title={ "Mediation" } />
      </div>

      <div className="panel-body">
        { mediation }
      </div>
      <button className="btn btn-default" onClick={ this.handleStopMediation }>stop mediation</button>
    </div>
    )
}
});

module.exports = MediationContainer;
