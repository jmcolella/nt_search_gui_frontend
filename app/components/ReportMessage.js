var React = require('react');

var ReportMessage = React.createClass({
  render: function () {
    if ( this.props.message.status === "0" ) {
      var status = <i className="fa fa-check icon-right-align" aria-hidden="true"></i>
    } else {
      var status = <i className="fa fa-exclamation-triangle icon-right-align" aria-hidden="true"></i>
    }
    return (
      <li className="list-group-item list-left-align">{ this.props.message.filename }
      { status } 
      </li>
    )
  }
});

module.exports = ReportMessage;
