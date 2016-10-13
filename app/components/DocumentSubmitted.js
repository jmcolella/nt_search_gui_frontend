var React = require('react');

function DocumentSubmitted ( props ) {
  if ( props.intervalIndex == props.index ) {
    var interval = props.intervalChange; 
  } else {
    var interval = props.intervalBase; 
  }
  return (
    <div className="form-group">
      <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">{ props.data.relativePath }</label>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <input id={ props.data.doc + "-interval" } className="form-control interval-input form-center" onChange={ props.onUpdateInterval } type="number" min="1"  name={ props.data.doc + "-interval" } placeholder="interval to check" value={ interval } />
      </div>
      <label className="col-lg-4 col-md-4 col-sm-4">
        <input id={ props.data.doc + "-copy" } type="checkbox" name={ props.data.doc + "-copy-checked" } value="1" />
      </label>
    </div>
  )
};

module.exports = DocumentSubmitted;
