var React = require('react');

function GoBackButton ( props ) {
  return (
    <button className="btn btn-default" onClick={ props.onGoBack } >back</button>
  )
};

module.exports = GoBackButton;