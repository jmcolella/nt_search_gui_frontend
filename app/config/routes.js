var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var createStore = require( 'redux' ).createStore;
var Provider = require( 'react-redux' ).Provider;
var socketMessagesStore = require("../reducers/app_reducers.js");
var AppContainer = require("../containers/AppContainer");
var MainMenu = require("../containers/MainMenu");
var RootContainer = require("../containers/RootContainer");

var routes = (
  <Provider store={ createStore( socketMessagesStore ) }>
    <Router history={ hashHistory }>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={MainMenu} />
        <Route path="/partitions/:id" component={RootContainer} />
      </Route>
    </Router>
  </Provider>
);

module.exports = routes;
