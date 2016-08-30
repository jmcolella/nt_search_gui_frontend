var React = require('react');


function Folder ( props ) {
  return (
    <div className="individual-folder-container">
      <i className="fa fa-folder-o fa-lg folder-document-icon-name folder-icon hidden" aria-hidden="true"></i>
      <h3 className="pointer folder-document-icon-name folder" onClick={function(){props.onUpdateRender("/folders/" + props.data.id)}} onMouseEnter={ props.onMouseOver } onMouseLeave={ props.onMouseDepart }><a className="folder-link">{ props.data.name }</a></h3>
    </div>
  )
};

module.exports = Folder;