var React = require('react');
var Partition = require("../components/Partition");

var PartitionContainer = React.createClass({
  getInitialState: function() {
    return {
      partitions: [],
    }
  },
  componentWillMount: function() {
    $.ajax({
      url: "http://localhost:3000/partitions",
      type: "GET"
    }).done( function( response ) {

      this.setState({
        partitions: response.partitions,
      })
    }.bind(this));
  },
  render: function () {
    return (
      <div className="row text-center">
        {
          this.state.partitions.map( function( partition ) {
            return <Partition
                      key={ partition.id }
                      data={ partition } />
          }.bind(this))
        }
     </div>
    )
  }
});

module.exports = PartitionContainer;