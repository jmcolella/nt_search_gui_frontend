var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Partition = React.createClass({
  render: function() {
    var partition = this.props.data;
    var pText = 
      <div>
        <p>Type: { partition.type }</p>
        <p>Size: { partition.size }</p>
        <p>Start: { partition.start }</p>
        <p>End: { partition.end }</p>
      </div>
      return (
        <div className="col-lg-12">
          
          <div className="individual-partition-container">
           
            <i className="fa fa-hdd-o fa-4x partition-name-icon partition-icon" aria-hidden="true"></i>
            <h1 className="inline-block-style"><Link to={ "/partitions/" + this.props.id }>partition-{ this.props.id }</Link></h1>
            
            <div className="partition-info"> 
              <table className="partition-info-table">
                <tbody>
                  <tr className="partition-info-table-row">
                    <td className="partition-info-label">Type:</td>
                    <td className="partition-info-specifics">{ partition.type }</td>
                  </tr>
                  <tr className="partition-info-table-row">
                    <td className="partition-info-label">Size:</td>
                    <td className="partition-info-specifics">{ partition.size }</td>
                  </tr>
                  <tr className="partition-info-table-row">
                    <td className="partition-info-label">Start:</td>
                    <td className="partition-info-specifics">{ partition.start }</td>
                  </tr>
                  <tr className="partition-info-table-row">
                    <td className="partition-info-label">End:</td>
                    <td className="partition-info-specifics">{ partition.end }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
        )
}
});

module.exports = Partition;
