var React = require('react');
var BreadCrumb = require('../components/BreadCrumb');


var BreadCrumbsContainer = React.createClass({
  getInitialState: function () {
    return {
      collapse: false,
      collapseData: {},
      breadcrumbList: []
    }
  },
  componentDidMount: function () {
    this.setState({
      breadcrumbList: this.props.breadcrumbList
    });
  },
  componentWillReceiveProps: function () {
    var breadcrumbList = this.props.breadcrumbList;
    var breadcrumbListLength = breadcrumbList.length;

    if ( breadcrumbListLength > 2 ) {
      this.setState({
        collapse: true,
        collapseData: breadcrumbList[ breadcrumbListLength - 3 ],
        breadcrumbList: breadcrumbList.slice( breadcrumbListLength - 2)
      })
    } else {
      this.setState({
        collapse: false,
        collapseData: {},
        breadcrumbList: this.props.breadcrumbList
      })
    }
  },
  render: function () {
    return (
      <div className="default-sub-header-height">
        <ol className="bread-crumb-list breadcrumb">
        {
          this.state.collapse && <BreadCrumb
                                    onUpdateRender={ this.props.onUpdateRender }
                                    collapseData={ this.state.collapseData } />
        }
        {
          this.state.breadcrumbList.map( function( pathObj, index ) {
            return <BreadCrumb
                      key={ index }
                      data={ pathObj }
                      index={ index }
                      onUpdateRender={ this.props.onUpdateRender } />
          }.bind(this))
        }
        </ol>
      </div>
    )
  }
});

module.exports = BreadCrumbsContainer;