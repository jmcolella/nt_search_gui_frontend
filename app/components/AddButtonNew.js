var React = require('react');

var AddButtonNew = React.createClass({
  render: function () {
    if ( this.props.clickedDocumentNames.includes( this.props.documentName ) ) {
      var add =
        <button id="add-button" className="btn btn-primary btn-sm disabled-button-color" disabled="disabled" onClick={ this.props.onClickAddButton }>added</button>
    } else {
      var add =
        <button id="add-button" className="btn btn-primary btn-sm primary-button-color" onClick={ this.props.onClickAddButton }>add</button>
    }
    return (
      <div className="icon-right-align">
        { add }
      </div>
    )
  }
});

module.exports = AddButtonNew;
