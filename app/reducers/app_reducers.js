var Redux = require( 'redux' );
var combineReducers = Redux.combineReducers;
var constants = require( '../constants/app_constants' );
var actions = require( '../actions/app_actions' );

var initialState = {
  messages: [],
  checkArr: [],
  incomingMsg: {}
};

function check ( stateMessages, message ) {
  var returnArr;

  returnArr = stateMessages.map( function ( m ) {
    if ( m.status !== message.status ) {
      return assign( {}, m, {
        status: message.status
      });
    } else {
      return m;
    }
  });

  return returnArr;
}
      
function messages ( state, action ) {
  state = state || initialState;

  switch( action.type ) {
    case constants.ADD_MESSAGE:
      return assign( {}, state, {
        messages: messages.concat( action.message ),
        checkArr: checkArr.concat( action.message.filename ),
        incomingMsg: action.message
      });
    case constants.CHECK_MESSAGE:
     var checkArr = check( state.messages, action.message );
  
      return assign( {}, state, {
        messages: checkArr,
        incomingMsg: action.message
      });
    default:
      return state;
  }
};

var socketMessagesStore = combineReducers({
  messages: messages
});

module.exports = socketMessagesStore;
