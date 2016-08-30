var React = require('react');

function DocumentToSubmit ( props ) {
  return (
    <div className="individual-submit-document-container">
      <h4>{ props.data.name } <button className="remove-button" onClick={ function() { props.onRemoveDocument( props.data ) } }><i className="fa fa-times" aria-hidden="true"></i></button></h4>
    </div>
  )
};

module.exports = DocumentToSubmit;