var React = require('react');

function AddButton ( props ) {
  if ( props.addButton ) {
    var add =
      <div>
        <button className="btn btn-primary btn-lg add-button" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
        <br/>
        <button className="btn btn-danger btn-sm cancel-add-button" onClick={ props.onCancelAddDocument }>cancel</button>
      </div>
  } else {
    var add =
      <button className="btn btn-primary btn-lg add-button" disabled="disabled" onClick={ function() { props.onUpdateDocumentList( props.documentToAdd ) } }>add document</button>
  }
  return (
    <div>
      { add }
    </div>
  )
};

module.exports = AddButton;