var React = require('react');

function CancelButton ( props ) {
  return (
    <button className="btn btn-danger cancel-button-color" onClick={ props.onCancelClick }>{ props.buttonTitle }</button>
  )
};

module.exports = CancelButton;
