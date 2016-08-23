var React = require("react");

var Partition = React.createClass({
  render: function() {
  var partition = this.props.data;
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h1><a href={"/partitions/" + partition.id}>{ partition.name }</a></h1>
      </div>
    )
  }
});

module.exports = Partition;