var React = require('react');
var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRouter;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var AppContainer = require("../containers/AppContainer");
var RootFolderContainer = require("../containers/RootFolderContainer");

var routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={AppContainer}>
      <Route path="/partitions/:id" component={RootFolderContainer}/>
    </Route>
  </Router>
);

module.exports = routes;