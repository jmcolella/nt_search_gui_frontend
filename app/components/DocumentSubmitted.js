var React = require('react');

var DocumentSubmitted = React.createClass ({
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
      <div className="form-group">
        <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">{ this.props.data.relativePath }</label>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <input id={ this.props.data.doc + "-interval" } className="form-control interval-input form-center" onChange={ this.handleUpdateInterval } type="number" min="1"  name={ this.props.data.doc + "-interval" } placeholder="interval to check" value={ this.state.interval } />
        </div>
        <label className="col-lg-4 col-md-4 col-sm-4">
          <input id={ this.props.data.doc + "-copy" } type="checkbox" name={ this.props.data.doc + "-copy-checked" } value="1" />
        </label>
      </div>
      )
  }
});

module.exports = DocumentSubmitted;
