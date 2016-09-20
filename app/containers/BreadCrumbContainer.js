var React = require('react');

var BreadCrumbContainer = React.createClass({
  updateRenderBreadCrumb: function() {
    if ( this.props.collapseData ) {
      this.props.onUpdateRender( this.props.collapseData.path, this.props.collapseData );
    } else {
      this.props.onUpdateRender( this.props.data );
    }
  },
  render: function () {
    if ( this.props.collapseData ) {
      var breadCrumbName = ".."
    } else {
      var breadCrumbName = this.props.data.name
    }
    return (
      <li className="bread-crumb pointer" onClick={ this.updateRenderBreadCrumb }><a className="dark-link">{ breadCrumbName }</a></li>
    )
  }

});

module.exports = BreadCrumbContainer;
