var React = require('react');

function CancelButton ( props ) {
  return (
    <button className="btn btn-default" onClick={ props.onCancelDocumentList }>cancel</button>
  )
};

module.exports = CancelButton;