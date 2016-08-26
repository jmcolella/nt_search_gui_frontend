var React = require('react');

function Document ( props ) {
 if( props.clickedDocuments.includes( props.data.name ) || props.documentToAdd && props.documentToAdd.id === props.data.id ) {
    var render =
      <h4 id={ "document-" + props.data.id } className="clicked-document">{ props.data.name }</h4>
  } else {
    var render =
      <h4 id={ "document-" + props.data.id } className="pointer" onClick={ function() { props.onShowAddButton( props.data ) } }>{ props.data.name }</h4>
  }
  return (
    <div>
      { render }
    </div>
  )
};

module.exports = Document;