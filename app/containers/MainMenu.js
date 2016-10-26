var React = require('react');
var PartitionContainer = require('../containers/PartitionContainer');
var MediationContainer = require('../containers/MediationContainer');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var MainMenu = React.createClass({
  getInitialState: function () {
    return {
      partition: false,
      mediation: false,
      mediationButton: false
    } 
  },
  componentDidMount: function () {
    serverRequestHelpers.indexHelper().then( function( response ) {
      debugger;
      this.setState({
        mediationButton: response.data.mediation 
      });
    }.bind(this));
  },
  togglePartitionContainer: function () {
    this.setState({
      index: false,
      partition: true 
    }); 
  },
  handleGoToMediation: function () {
    this.setState({
      index: false,
      mediation: true 
    }); 
  },
  render: function () {
    if ( this.state.partition ) {
      var indexRender = 
        <PartitionContainer />
    } else if ( this.state.mediation ) {
      var indexRender =
        <MediationContainer
         mediation={ true } />
    } else {
      var indexRender = 
        <div>
         <button onClick={ this.togglePartitionContainer }>New Mediation</button>
         { this.state.mediationButton ? <button onClick={ this.handleGoToMediation }>Go to Mediation</button> : <p>no</p> }
        </div> 
    }
    return (
      <div>
        { indexRender }
      </div> 
    ) 
  }
});

module.exports = MainMenu;
