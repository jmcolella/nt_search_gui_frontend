var React = require('react');

var AppContainer = React.createClass({
  render: function() {
    return (
      <div className="container text-center">
        <h1>NT Search GUI</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = AppContainer;