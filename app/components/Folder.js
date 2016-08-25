var React = require('react');


function Folder ( props ) {
  return (
    <div className="col-lg-12">
      <h3 className="folder" onClick={function(){props.onUpdateRender(props.data.id)}}>{ props.data.name }</h3>
    </div>
  )
};

module.exports = Folder;