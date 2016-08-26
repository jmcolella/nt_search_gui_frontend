var React = require("react");
var ReactDOM = require("react-dom");
var routes = require("./config/routes");
var AppContainer = require("./containers/AppContainer")


ReactDOM.render(
  routes, document.getElementById("app")
);