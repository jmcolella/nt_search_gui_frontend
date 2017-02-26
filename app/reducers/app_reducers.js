var Redux = require( 'redux' );
var assign = require( 'object-assign' );
var combineReducers = Redux.combineReducers;
var constants = require( '../constants/app_constants' );
var actions = require( '../actions/app_actions' );

var initialState = {
  mediation: false,
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
    case constants.START_MEDIATION:
      return assign( {}, state, {
        mediation: true,
        messages: [],
        checkArr: [],
        incomingMsg: {}
      });
    case constants.ADD_MESSAGE:
      return assign( {}, state, {
        messages: state.messages.concat( action.message ),
        checkArr: state.checkArr.concat( action.message.filename ),
        incomingMsg: action.message
      });
    case constants.CHECK_MESSAGE:
     var checkArray = check( state.messages, action.message );
  
      return assign( {}, state, {
        messages: checkArray,
        incomingMsg: action.message
      });
    case constants.STOP_MEDIATION:
      return assign( {}, state, {
        mediation: false
      });
    default:
      return state;
  }
};

var socketMessagesStore = combineReducers({
  messages: messages
});

module.exports = socketMessagesStore;
