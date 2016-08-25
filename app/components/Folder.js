var React = require('react');


function Folder ( props ) {
  return (
    <div className="col-lg-12">
      <h3><a onClick={props.onUpdateRender}>{ props.data.name }</a></h3>
    </div>
  )
};

module.exports = Folder;