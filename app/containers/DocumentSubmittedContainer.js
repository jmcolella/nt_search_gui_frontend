var React = require('react');
var DocumentSubmitted = require('../components/DocumentSubmitted');

var DocumentSubmittedContainer = React.createClass ({
  getInitialState: function () {
    return {
      interval: 10
    }
  },
  handleUpdateInterval: function ( e ) {
    if ( e.target.value === "" ) {
      this.setState({
        interval: ""
      });
    } else if ( e.target.value < 1 ) {
      this.setState({
        interval: 1,
      });
    } else {
      this.setState({
        interval: e.target.value,
      });
    };
  },
  render: function () {
    return (
      <DocumentSubmitted
          data={ this.props.data }
          onUpdateInterval={ this.handleUpdateInterval } />
      )
  }
});

module.exports = DocumentSubmittedContainer;
