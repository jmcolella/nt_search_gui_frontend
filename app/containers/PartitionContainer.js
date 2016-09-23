var React = require('react');
var Partition = require("../components/Partition");

var PartitionContainer = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      partitions: [],
    }
  },
  componentDidMount: function() {
    $.ajax({
      url: "http://localhost:3001/partitions",
      type: "GET"
    }).done( function( response ) {
      response = JSON.parse( response );

      this.setState({
        loading: false,
        partitions: response.mbr,
      })
    }.bind(this));
  },
  render: function () {
    if ( this.state.loading ) {
      var partitionRender = <p>Loading</p>
    } else {
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
