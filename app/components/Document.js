var React = require('react');

function Document ( props ) {
  debugger;
  if ( props.documentList.includes( props.data ) || props.documentToAdd && props.documentToAdd.id === props.data.id ) {
    var render =
      <h4 id="clicked">{ props.data.name }</h4>
  } else {
    var render =
      <h4 className="pointer" onClick={ function() { props.onShowAddButton( props.data ) } }>{ props.data.name }</h4>
  }
  return (
    <div>
      { render }
    </div>
  )
};

module.exports = Document;