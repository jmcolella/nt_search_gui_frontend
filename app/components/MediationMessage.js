var React = require('react');

var MediationMessage = React.createClass({
  render: function () {
    if ( !this.props.mediation || this.props.incomingMessage.filename === this.props.message.filename && this.props.message.status === "0" ) {
      var status = <i className="fa fa-check icon-right-align success-icon" aria-hidden="true"></i>
    } else if ( !this.props.mediation || this.props.incomingMessage.filename === this.props.message.filename && this.props.message.status !== "0") {
        var status = <i className="fa fa-exclamation-triangle icon-right-align warning-icon" aria-hidden="true"></i>
    } else {
      var status = <i className="fa fa-circle-o-notch fa-spin fa-fw icon-right-align grey-text-color"></i>
    }
    return (
      <li className="list-group-item list-left-align">
        <span className="document-color">{ this.props.message.filename }</span>
        { status }
      </li>
      )
  }
});

module.exports = MediationMessage;
