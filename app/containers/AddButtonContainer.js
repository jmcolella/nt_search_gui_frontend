var React = require('react');
var AddButtonNew = require('../components/AddButtonNew');

var AddButtonContainer = React.createClass({
  render: function () {
    return (
      <AddButtonNew
          addButton={ this.props.addButton }
          onClickAddButton={ this.handleClickAddButton } />
    )
  }
});

module.exports = AddButtonContainer;