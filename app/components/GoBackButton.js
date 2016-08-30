var React = require('react');

function GoBackButton ( props ) {
  return (
    <button className="remove-button" onClick={ props.onGoBack } ><i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i></button>
  )
};

module.exports = GoBackButton;