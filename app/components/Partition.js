var React = require("react");

var Partition = React.createClass({
  render: function() {
    var partition = this.props.data;
    var onUpdateRender = this.props.onUpdateRender
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <h1 onClick={ function(){ onUpdateRender("/partitions/" + partition.id) } }>{ partition.name }</h1>
      </div>
    )
  }
});

module.exports = Partition;