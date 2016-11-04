var React = require('react');
var Partition = require("../components/Partition");
var MediationContainer = require('../containers/MediationContainer');
var serverRequestHelpers = require('../utils/serverRequestHelpers');

var PartitionContainer = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      partitions: []
    }
  },
  componentDidMount: function() {
    serverRequestHelpers.getPartitionsHelper().then( function( response ) {
      this.setState({
        loading: false,
        partitions: response.data.mbr,
      })
    }.bind(this));
  },
  render: function () {
    if ( this.state.loading ) {
      var partitionRender = <p>Loading</p>
    } else if ( this.state.mediation === true ) {
        var partitionRender = 
            <MediationContainer
              mediation={ true } />
    }  else {
        var partitionRender = 
          this.state.partitions.map( function( partition, index ) {
            return <Partition
              key={ index }
              id={ index }
              data={ partition } />
            }.bind(this))

  }
  return (
    <div className="row text-center">
      { partitionRender }
    </div>
    )
}
});

module.exports = PartitionContainer;
