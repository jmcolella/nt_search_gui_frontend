var React = require('react');

function DocumentSubmitted ( props ) {
  return (
    <div className="form-group">
      <label className="col-lg-4 control-label form-center">{ props.data.name }</label>
      <div className="col-lg-4">
        <input id={ props.data.name | "-interval" } className="form-control interval-input form-center" type="number" name={ props.data.name + "-interval" } placeholder="interval to check" />
      </div>
      <label className="col-lg-4">
        <input id={ props.data.name | "-copy" } type="checkbox" name={ props.data.name + "-copy-checked" } value="1" />
      </label>
    </div>
  )
};

module.exports = DocumentSubmitted;