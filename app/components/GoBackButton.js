var React = require('react');

function GoBackButton ( props ) {
  return (
    <button className="back-button" onClick={ props.onGoBack } ><i className="fa fa-arrow-left fa-lg" aria-hidden="true"></i></button>
  )
};

module.exports = GoBackButton;