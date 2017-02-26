var React = require('react');
var MediationMessage = require("../components/MediationMessage");

var MediationListContainer = React.createClass({
  render: function () {
    return (
      <div>
       <ul className="list-group half-width-list">
         <li className="list-group-item list-left-align">
           <h4 className="dark-blue-color inline-block-style">Document</h4>
           <span className="dark-blue-color icon-right-align inline-block-style"><h4>Status</h4></span> 
         </li>
         { 
           this.props.messages.map( function( message, index ) {
              return <MediationMessage
                       key={ index }
                       message={ message }
                       mediation={ this.props.mediation }
                       incomingMessage={ this.props.incomingMsg } />
           }.bind(this))
         }
        </ul>
        { this.props.messages.length < 1 && this.props.mediation ?  <i className="fa fa-2x fa-circle-o-notch fa-spin fa-fw mediation-loading-icon grey-text-color"></i> : <p></p> }
      </div>
    )
  }
});

module.exports = MediationListContainer;
