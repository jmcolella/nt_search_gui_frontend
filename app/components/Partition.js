var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Partition = React.createClass({
  render: function() {
    var partition = this.props.data;
    return (
      <div className="col-lg-12 individual-partition-container">
        <div className="col-lg-2 col-lg-offset-1">
          <i className="fa fa-hdd-o fa-4x partition-name-icon partition-icon" aria-hidden="true"></i>
          <h1 className="inline-block-style"><Link to={ "/partitions/" + this.props.id }>partition-{ this.props.id }</Link></h1>
        </div>
        <div className="col-lg-2">
          <h1 className="inline-block-style">Type: { partition.type }</h1>
        </div>
        <div className="col-lg-2">
          <h1 className="inline-block-style">Size: { partition.size }</h1>
        </div>
        <div className="col-lg-2">
          <h1 className="inline-block-style">Start: { partition.start }</h1>
        </div>
        <div className="col-lg-2">
          <h1 className="inline-block-style">End: { partition.end }</h1>
        </div>
      </div>
      )
}
});

module.exports = Partition;
