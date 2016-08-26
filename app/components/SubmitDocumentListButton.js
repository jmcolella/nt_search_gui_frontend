var React = require('react');

function SubmitDocumentListButton ( props ) {
  return (
    <button className="btn btn-default" onClick={ props.onSubmitDocumentList }>submit list</button>
  )
};

module.exports = SubmitDocumentListButton;