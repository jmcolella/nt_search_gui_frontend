var React = require('react');

function GoBackButton ( props ) {
  return (
    <button id="back-button" className="grey-text-color" onClick={ props.onGoBack } ><i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i></button>
  )
};

module.exports = GoBackButton;