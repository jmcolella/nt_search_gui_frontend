var React = require('react');

function Header ( props ) {
  return (
    <h1 className="responsive-header">{ props.title }</h1>
  )
};

module.exports = Header;