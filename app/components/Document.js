var React = require('react');

function Document ( props ) {
 if( props.clickedDocuments.includes( props.data.name ) || props.documentToAdd && props.documentToAdd.id === props.data.id ) {
    var render =
      <h4 id={ "document-" + props.data.id } className="clicked-document dfolder-document-icon-name">{ props.data.name }</h4>
  } else {
    var render =
      <div>
        <i className="fa fa-file-o fa-lg folder-document-icon-name document-icon hidden" aria-hidden="true"></i>
        <h4 id={ "document-" + props.data.id } className="pointer folder-document-icon-name" onClick={ function() { props.onShowAddButton( props.data ) } } onMouseEnter={ props.onMouseOver } onMouseLeave={ props.onMouseDepart }>{ props.data.name }</h4>
      </div>
  }
  return (
    <div className="individual-document-container">
      { render }
    </div>
  )
};

module.exports = Document;