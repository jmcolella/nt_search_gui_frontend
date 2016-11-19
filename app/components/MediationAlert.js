var React = require( 'react' );

var MediationAlert = React.createClass({
  getInitialState: function () {
    return {
      error: false
    }
  },
  componentDidMount: function () {
    if ( this.props.incomingMsg.status !== 0 ) {
      this.setState({
        error: true
      });
    };
  },
  componentWillReceiveProps: function ( nextProps ) {
    if ( nextProps.incomingMsg.status !== 0 ) {
      this.setState({
        error: true
      });
    };
  },
  render: function () {
    if ( this.state.error ) {
      return (
        <div>
          <p>{ this.props.incomingMsg.filename } has been compromised and resolved</p>
        </div>
      )
    }
  }
});
