var React = require('react');

function AddButton ( props ) {
  return (
    <div>
      <button className="btn btn-default" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
    </div>
  )
};

module.exports = AddButton;