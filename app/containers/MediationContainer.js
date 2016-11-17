var React = require('react');
var connect = require( 'react-redux' ).connect;
var dispatch = require( 'redux' ).dispatch;
var Header = require('../components/Header');
var MediationListContainer = require('../containers/MediationListContainer');
var MediationButton = require('../components/MediationButton');
var actions = require( '../actions/app_actions' );
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var MediationContainer = React.createClass({
  componentDidMount: function () {
    var store = this.context.store;
    var state = store.getState().messages;

    if ( this.props.mediation === true ) {
      store.dispatch( actions.toggleMediation() );

      var localSocket = new WebSocket("ws://localhost:3001/web_socket_return");

      localSocket.onopen = function( event ) {
        console.log("open connection");
      }

      localSocket.onmessage = function ( event ) {
        var store = this.context.store;
        var state = store.getState().messages;
        var message = JSON.parse( event.data.split("}")[0] + "}" );
        console.log( message );

        if ( state.checkArr.includes( message.filename ) ) {
          store.dispatch( actions.checkMessage( message ) );
        } else {
          store.dispatch( actions.addMessage( message ) );
        }

      }.bind(this);
    }
  },
  handleGenerateMediation: function () {
    var localSocket;
    var store = this.context.store;

    localSocket = new WebSocket( "ws://localhost:3001/web_socket" + new Date() );

    localSocket.onopen = function ( event ) {
      console.log("open connection");
    }

    localSocket.onmessage = function ( event ) {
      var store = this.context.store;
      var state = store.getState().messages;
      var message = JSON.parse( event.data.split("}")[0] + "}" );
      console.log( message );

      if ( state.checkArr.includes( message.filename ) ) {
        store.dispatch( actions.checkMessage( message ) );
      } else {
        store.dispatch( actions.addMessage( message ) );
      }

    }.bind(this);

    store.dispatch( actions.toggleMediation() );

  },
  handleStopMediation: function () {
    var store = this.context.store;
    serverRequestHelpers.closeSocketHelper().then( function( response ) {
      store.dispatch( actions.toggleMediation() );
    }.call( actions ));
  },
  render: function () {
    var state = this.context.store.getState().messages;
    if ( state.incomingMsg.status && state.incomingMsg.status != 0 ) {
      alert( "Compromised message" + state.incomingMsg.filename );
    }
    return (
      <div className="panel panel-default text-center full-width three-quarter-width">
        <div className="panel-heading">
          <Header
            className={ "" }
            title={ "Mediation" } />
        </div>

        <div className="panel-body">
          <MediationListContainer
            mediation={ state.mediation }
            messages={ state.messages }
            incomingMsg={ state.incomingMsg } />

        </div>
        <MediationButton
          mediation={ state.mediation }
          onGenerateMediation={ this.handleGenerateMediation }
          onStopMediation={ this.handleStopMediation } />
      </div>
      )
}
});

MediationContainer.contextTypes = {
  store: React.PropTypes.object
}

module.exports = connect()( MediationContainer );
