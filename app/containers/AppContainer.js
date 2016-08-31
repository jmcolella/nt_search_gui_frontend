var React = require('react');
var Header = require('../components/Header');

var AppContainer = React.createClass({
  render: function() {
    return (
      <div className="container-fluid font">
        <div className="row text-center app-header">
          <Header
              title={ 'NT Search GUI' } />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = AppContainer;