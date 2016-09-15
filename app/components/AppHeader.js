var React = require('react');
var Header = require('../components/Header');

var AppHeader = React.createClass({
  render: function () {
    return (
      <div className="row text-center app-header">
        <Header
            title={ 'NT Search GUI' } />
      </div>
    )
  }
});

module.exports = AppHeader;