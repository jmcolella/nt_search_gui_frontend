var React = require('react');

var GenerateMediationButton = React.createClass({
  render: function () {
    return (
      <button id="generate-button" className="btn btn-primary primary-button-color" onClick={ this.props.onGenerateMediation }>Start Mediation</button>
    )
  }
});

module.exports = GenerateMediationButton;
