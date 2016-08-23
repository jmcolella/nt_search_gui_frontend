var React = require("react");
var ReactRouter = require("react-router")
var Link = ReactRouter.Link;

var Partition = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  render: function() {
    var partition = this.props.data;
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h1><Link to={"/partitions/" + partition.id}>{ partition.name }</Link></h1>
      </div>
    )
  }
});

module.exports = Partition;