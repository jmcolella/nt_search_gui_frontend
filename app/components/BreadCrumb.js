var React = require('react');

var BreadCrumb = React.createClass({
  updateRender: function() {
    this.props.onUpdateRender( this.props.data.path, this.props.data );
  },
  render: function () {
    return (
      <h1 className="bread-crumb pointer" onClick={ this.updateRender }>{ this.props.data.name }/</h1>
    )
  }

});

module.exports = BreadCrumb;