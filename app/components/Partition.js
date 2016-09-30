var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Partition = React.createClass({
  render: function() {
    var partition = this.props.data;
    return (
      <div className="col-lg-12 individual-partition-container">
        <div className="individual-partition-container">
          <i className="fa fa-hdd-o fa-4x partition-name-icon partition-icon" aria-hidden="true"></i>
          <h1 className="inline-block-style"><Link to={ "/partitions/" + this.props.id }>partition-{ this.props.id }</Link></h1>
          
          <table>
            <tr>
              <td>Type:</td>
              <td> { partition.type }</td>
            </tr>

            <tr> 
              <td>Size:</td>
              <td>{ partition.size }</td>
            </tr>

            <tr>
              <td>Start:</td>
              <td>{ partition.start }</td>
            </tr>

            <tr>
              <td>End:</td>
              <td>{ partition.end }</td>
            </tr>
          </table>

        </div>
      </div>
      )
}
});

module.exports = Partition;
