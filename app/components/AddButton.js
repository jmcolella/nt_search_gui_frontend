var React = require('react');

var AddButton = React.createClass({
  render: function () {
    if ( this.props.addButton ) {
      var add =
        <div>
          <button id="add-button" className="btn btn-primary btn-lg primary-button-color" onClick={ this.props.onClickAddButton }>add document</button>
          <br/>
          <button id="cancel-add-button" className="btn btn-danger btn-sm cancel-button-color" onClick={ this.props.onCancelAddDocument }>cancel</button>
        </div>
    } else {
      var add =
        <button id="add-button" className="btn btn-primary btn-lg disabled-button-color" disabled="disabled" onClick={ this.props.onClickAddButton }>add document</button>
    }
    return (
      <div id="add-button-container">
        { add }
      </div>
    )
  }
});

module.exports = AddButton;