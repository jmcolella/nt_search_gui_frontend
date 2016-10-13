var React = require('react');
var ReportMessage = require("../components/ReportMessage");

var ReportListContainer = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="list-group">
          {
             this.props.messages.map( function( message, index ) {
               return <ReportMessage
                        key={ index }
                        message={ message }
                        incomingMessage={ this.props.incomingMsg } />
             }.bind(this))
          }
          </ul>
      </div>
    )
  }
});

module.exports = ReportListContainer;
