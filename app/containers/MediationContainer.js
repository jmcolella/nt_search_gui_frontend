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
  componentDidMount: function () {
    if ( this.props.mediation === true ) {
      this.setState({
        mediation: true 
      });

      var localSocket = new WebSocket("ws://localhost:3001/web_socket_return");

      localSocket.onopen = function( event ) {
        console.log("open connection");
      }

      localSocket.onmessage = function ( event ) {
        var message = JSON.parse( event.data.split("}")[0] + "}" );
        console.log( message );

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
          socket: localSocket,
          messages: this.state.messages,
          checkArr: this.state.checkArr,
          incomingMsg: message
        });
      }.bind(this);
    }
  },
  handleGenerateMediation: function () {
    var localSocket;

    localSocket = new WebSocket("ws://localhost:3001/web_socket");

    localSocket.onopen = function ( event ) {
      console.log("open connection");
    }

    localSocket.onmessage = function ( event ) {
      var message = JSON.parse( event.data.split("}")[0] + "}" );
      console.log( message );

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
        checkArr: this.state.checkArr,
        incomingMsg: message
      });

    }.bind(this);
    this.setState({
      mediation: true,
      socket: localSocket 
    });
  },
  handleStopMediation: function () {
    serverRequestHelpers.closeSocketHelper().then( function( response ) {
      this.setState({
        mediation: false
      })
    }.bind(this));
  },
  render: function () {
    return (
      <div className="panel panel-default text-center full-width three-quarter-width">
        <div className="panel-heading">
          <Header
            className={ "" }
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
