var React = require('react');

function DocumentToSubmit ( props ) {
  return (
    <li className="individual-submit-document-container list-group-item">
      <h4 className="document-color" >{ props.data }</h4>

      <button className="remove-button" onClick={ props.onClickDocumentToSubmit }><i className="fa fa-times" aria-hidden="true"></i></button>
    </li>
  )
};

module.exports = DocumentToSubmit;
