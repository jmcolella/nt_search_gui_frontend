var React = require('react');
var Partition = require('../components/Partition');

var PartitionContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        {
            this.props.partitions.map( function( partition ) {
              return <Partition
                        key={ partition.id }
                        data={ partition }
                        onUpdateRender={ this.props.onUpdateRender } />
            }.bind(this))
          }
      </div>
    )
  }
});

module.exports = PartitionContainer;