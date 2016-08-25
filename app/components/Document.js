var React = require('react');

function Document ( props ) {
  return (
    <div className="col-lg-12">
      <h4>{ props.data.name }</h4>
    </div>
  )
};

module.exports = Document;