var React = require('react');

var AppContainer = React.createClass({
  render: function() {
    return (
      <div className="container-fluid font">
        <div className="row text-center">
          <h1>NT Search GUI</h1>
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = AppContainer;