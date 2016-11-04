var React = require('react');

function Header ( props ) {
  return (
    <h1 className={ props.className }>{ props.title }</h1>
  )
};

module.exports = Header;
