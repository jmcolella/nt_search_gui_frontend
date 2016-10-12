var React = require('react');

var ReportMessage = React.createClass({
  render: function () {
    if ( this.props.message.status === "0" ) {
      var status = "unchanged"
    } else if ( this.props.status === "1" ) {
      var status = "compromised"
    } else {
      var status = "deleted"
    }
    return (
       <li>{ this.props.message.filename }: { status }</li>
    )
  }
});

module.exports = ReportMessage;
