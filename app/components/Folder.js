var React = require('react');


function Folder ( props ) {
  return (
    <div className="col-lg-12">
      <h3>{ props.data.name }</h3>
    </div>
  )
};

module.exports = Folder;