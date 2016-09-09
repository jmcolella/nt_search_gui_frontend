var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Partition = React.createClass({
  render: function() {
    var partition = this.props.data;
    return (
      <div className="col-lg-12 individual-partition-container">
        <i className="fa fa-hdd-o fa-4x partition-name-icon partition-icon" aria-hidden="true"></i>
        <h1 className="inline-block-style"><Link to={ "/partitions/" + partition.id }>{ partition.name }</Link></h1>
      </div>
    )
  }
});

module.exports = Partition;