var React = require('react');

function Document ( props ) {
  return (
    <div>
      <h4 onClick={ function() { props.onShowAddButton( props.data ) } }>{ props.data.name }</h4>
    </div>
  )
};

module.exports = Document;