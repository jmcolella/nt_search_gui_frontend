var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var AppContainer = require("../containers/AppContainer");
var PartitionContainer = require("../containers/PartitionContainer");
var RootFolderContainer = require("../containers/RootFolderContainer");

var routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={PartitionContainer} />
      <Route path="/partitions/:id" component={RootFolderContainer} />
    </Route>
  </Router>
);

module.exports = routes;