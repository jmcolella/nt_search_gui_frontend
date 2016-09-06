var React = require('react');
var BreadCrumb = require('../components/BreadCrumb');


var BreadCrumbsContainer = React.createClass({
  render: function () {
    return (
      <div>
        {
          this.props.breadcrumbList.map( function( pathObj, index ) {
            return <BreadCrumb
                      key={ index }
                      data={ pathObj }
                      onUpdateRender={ this.props.onUpdateRender } />
          }.bind(this))
        }
      </div>
    )
  }
});

module.exports = BreadCrumbsContainer;