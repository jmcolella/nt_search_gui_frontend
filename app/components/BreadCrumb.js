var React = require('react');

var BreadCrumb = React.createClass({
  updateRender: function() {
    if ( this.props.collapseData ) {
      this.props.onUpdateRender( this.props.collapseData.path, this.props.collapseData );
    } else {
      this.props.onUpdateRender( this.props.data.path, this.props.data );
    }
  },
  render: function () {
    if ( this.props.collapseData ) {
      var breadCrumbName = ".."
    } else {
      var breadCrumbName = this.props.data.name
    }
    return (
      <li className="bread-crumb pointer" onClick={ this.updateRender }><a className="dark-link">{ breadCrumbName }</a></li>
    )
  }

});

module.exports = BreadCrumb;