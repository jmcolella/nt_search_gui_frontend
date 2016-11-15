var React = require("react");
var ReactDOM = require("react-dom");
var createStore = require( 'redux' ).createStore;
var Provider = require( 'react-redux' ).Provider;
var socketMessagesStore = require("./reducers/app_reducers");
var routes = require("./config/routes");
var AppContainer = require("./containers/AppContainer")


ReactDOM.render(
  <Provider store={ createStore( socketMessagesStore ) }>
    routes
  </Provider>, 
  document.getElementById("app")
);
