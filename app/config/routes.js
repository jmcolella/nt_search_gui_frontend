var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var AppContainer = require("../containers/AppContainer");
var MainMenu = require("../containers/MainMenu");
var RootContainer = require("../containers/RootContainer");

var routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={MainMenu} />
      <Route path="/partitions/:id" component={RootContainer} />
    </Route>
  </Router>
);

module.exports = routes;
