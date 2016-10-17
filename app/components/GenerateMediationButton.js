var React = require('react');

var GenerateMediationButton = React.createClass({
  handleClick: function () {
    this.props.onGenerateMediation( false );
  },
  render: function () {
    return (
      <button id="generate-button" className="btn btn-primary primary-button-color" onClick={ this.handleClick }>Start Mediation</button>
    )
  }
});

module.exports = GenerateMediationButton;
