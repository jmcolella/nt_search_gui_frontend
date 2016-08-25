var React = require('react');


function Folder ( props ) {
  return (
    <div className="col-lg-12">
      <h3 className="pointer" onClick={function(){props.onUpdateRender("/folders/" + props.data.id)}}><a>{ props.data.name }</a></h3>
    </div>
  )
};

module.exports = Folder;