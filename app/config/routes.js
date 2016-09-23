var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var AppContainer = require("../containers/AppContainer");
var PartitionContainer = require("../containers/PartitionContainer");
var RootContainer = require("../containers/RootContainer");

var routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PartitionContainer} />
      <Route path="/partitions/:id" component={RootContainer} />
    </Route>
  </Router>
);

module.exports = routes;
