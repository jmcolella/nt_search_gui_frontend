var React = require('react');

function DocumentSubmitted ( props ) {
  return (
    <div className="form-group">
      <label className="col-lg-4 control-label form-center">{ props.data.name }</label>
      <div className="col-lg-4">
        <input className="form-control" type="text" name={ props.data.name + "-interval" } placeholder="interval to check" />
      </div>
      <label className="col-lg-4">
        <input type="checkbox" id="blankCheckbox" value={ props.data.name + "-copy" } />
      </label>
    </div>
  )
};

module.exports = DocumentSubmitted;