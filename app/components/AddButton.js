var React = require('react');

function AddButton ( props ) {
  return (
    <button className="btn btn-default" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
  )
};

module.exports = AddButton;