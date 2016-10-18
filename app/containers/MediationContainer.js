var React = require('react');
var Header = require('../components/Header');
var MediationListContainer = require('../containers/MediationListContainer');
var MediationButton = require('../components/MediationButton');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var MediationContainer = React.createClass({
  getInitialState: function () {
    return {
      socket: "",
      mediation: false,
      messages: [],
      checkArr: [],
      incomingMsg: {}
    }
  },
  handleGenerateMediation: function ( close_socket ) {
    if ( close_socket ) {
      this.state.socket.close();
      this.state.socket.onclose = function ( event ) {
        this.setState({
          mediation: false 
        }); 
      }.bind(this);
    }

    var localSocket;

    if ( ! close_socket ) {
      localSocket = new WebSocket("ws://localhost:3001");

      localSocket.onopen = function ( event ) {
        console.log("open connection");
      }

      localSocket.onmessage = function ( event ) {
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
      this.setState({
        mediation: true,
        socket: localSocket 
      });
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
    return (
     <div className="panel panel-default text-center">
      <div className="panel-heading">
        <Header
          title={ "Mediation" } />
      </div>

      <div className="panel-body">
        <MediationListContainer
           mediation={ this.state.mediation }
           messages={ this.state.messages }
           incomingMsg={ this.state.incomingMsg } />

      </div>
      <MediationButton
          mediation={ this.state.mediation }
          onGenerateMediation={ this.handleGenerateMediation }
          onStopMediation={ this.handleStopMediation } />
 
     </div>
    )
}
});

module.exports = MediationContainer;
