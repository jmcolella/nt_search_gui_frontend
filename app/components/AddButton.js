var React = require('react');

function AddButton ( props ) {
  return (
    <button onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
  )
};

module.exports = AddButton;