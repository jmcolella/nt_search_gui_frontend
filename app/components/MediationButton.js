var React = require('react');
var CancelButton = require('../components/CancelButton');

var MediationButton = React.createClass({
  handleClick: function () {
    this.props.mediation ? this.props.onStopMediation() :  this.props.onGenerateMediation( false );
  },
  render: function () {
    if ( this.props.mediation ) {
      var mediationButton = 
        <CancelButton
          onCancelClick={ this.handleClick }
          buttonTitle={ "Stop Mediation" } />
   } else {
      var mediationButton = 
        <button id="generate-mediation-button" className="btn btn-primary primary-button-color" onClick={ this.handleClick }>Start Mediation</button>
    }
    return (
      <div id="mediation-button-container">
        { mediationButton }
      </div>
    )
  }
});

module.exports = MediationButton;
