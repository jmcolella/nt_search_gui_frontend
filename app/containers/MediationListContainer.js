var React = require('react');
var MediationMessage = require("../components/MediationMessage");

var MediationListContainer = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="list-group">
          {
             this.props.messages.map( function( message, index ) {
               return <MediationMessage
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

module.exports = MediationListContainer;
