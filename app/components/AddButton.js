var React = require('react');

function AddButton ( props ) {
  if ( props.addButton ) {
    var add =
      <div>
        <button id="add-button" className="btn btn-primary btn-lg primary-button-color" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
        <br/>
        <button id="cancel-add-button" className="btn btn-danger btn-sm cancel-button-color" onClick={ props.onCancelAddDocument }>cancel</button>
      </div>
  } else {
    var add =
      <button id="add-button" className="btn btn-primary btn-lg disabled-button-color" disabled="disabled" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
  }
  return (
    <div>
      { add }
    </div>
  )
};

module.exports = AddButton;