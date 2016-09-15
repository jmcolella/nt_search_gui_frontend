var React = require('react');
var AppHeader = require('../components/AppHeader');

var AppContainer = React.createClass({
  render: function() {
    return (
      <div className="container-fluid font">
        < AppHeader />

        {this.props.children}
      </div>
    )
  }
});

module.exports = AppContainer;