var React = require('react');

function CancelButton ( props ) {
  return (
    <button id={ props.id } className="btn btn-danger cancel-button-color" onClick={ props.onCancelClick }>{ props.buttonTitle }</button>
  )
};

module.exports = CancelButton;
