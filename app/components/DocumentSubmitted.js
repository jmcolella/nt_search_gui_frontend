var React = require('react');

function DocumentSubmitted ( props ) {
  return (
    <div className="form-group">
      <label className="col-lg-4 col-md-4 col-sm-4 control-label form-center">{ props.data.relativePath }</label>
      <div className="col-lg-4 col-md-4 col-sm-4">
        <input id={ props.data.doc.name | "-interval" } className="form-control interval-input form-center" type="number" name={ props.data.doc.name + "-interval" } placeholder="interval to check" />
      </div>
      <label className="col-lg-4 col-md-4 col-sm-4">
        <input id={ props.data.doc.name | "-copy" } type="checkbox" name={ props.data.doc.name + "-copy-checked" } value="1" />
      </label>
    </div>
  )
};

module.exports = DocumentSubmitted;