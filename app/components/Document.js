var React = require('react');

function Document ( props ) {
 if( props.clickedDocumentNames.includes( props.data.name ) || props.documentToAdd && props.documentToAdd.id === props.data.id ) {
    var render =
      <h4 id={ "document-" + props.data.id } className="grey-text-color dfolder-document-icon-name">{ props.data.name }</h4>
  } else {
    var render =
      <div>
        <i className="fa fa-file-o fa-lg inline-block-style document-icon hidden" aria-hidden="true"></i>
        <h4 id={ "document-" + props.data.id } className="pointer inline-block-style" onClick={ function() { props.onShowAddButton( props.data ) } } onMouseEnter={ props.onMouseOver } onMouseLeave={ props.onMouseDepart }>{ props.data.name }</h4>
      </div>
  }
  return (
    <div className="individual-document-container">
      { render }
    </div>
  )
};

module.exports = Document;