var React = require('react');

function SubmitDocumentListButton ( props ) {
  return (
    <button className="btn btn-primary primary-button-color" onClick={ props.onSubmitDocumentList }>submit list</button>
  )
};

module.exports = SubmitDocumentListButton;