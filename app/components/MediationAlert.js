var React = require( 'react' );

var MediationAlert = React.createClass({
  getInitialState: function () {
    return {
      message: {},
      error: false
    }
  },
  componentDidMount: function () {
    if ( this.props.incomingMsg.status && this.props.incomingMsg.status !== "0" ) {
      this.setState({
        message: this.props.incomingMsg,
        error: true
      });
    };
  },
  componentWillReceiveProps: function ( nextProps ) {
    if (  nextProps.incomingMsg.status && nextProps.incomingMsg.status !== "0") {
      this.setState({
        message: nextProps.incomingMsg,
        error: true
      });
    };
  },
  closeErrorMessage: function () {
    this.setState({
      error: false
    });
  },
  render: function () {
    if ( this.state.error ) {
      var error = 
        <div className="mediation-alert-container text-center grey-text-color">
          <p>{ this.state.message.filename } was compromised and has now been resolved</p>
          <i className="fa fa-times mediation-alert-exit-icon" aria-hidden="true" onClick={ this.closeErrorMessage }></i>
        </div>
    }
    return (
      <div className="mediation-alert-wrapper three-quarter-width">
        { error }
      </div>
   );
 }
});

module.exports = MediationAlert;
