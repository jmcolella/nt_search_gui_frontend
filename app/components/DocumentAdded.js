var React = require('react');

function DocumentAdded ( props ) {
  return (
    <h4>{ props.data.name }</h4>
  )
};

module.exports = DocumentAdded;