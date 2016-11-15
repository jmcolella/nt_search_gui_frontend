var constants = require( '../constants/app_constants' );

module.exports.startMediation = function startMediation () {
  return {
    type: constants.START_MEDIATION
  };
};

module.exports.addMessage = function addMessage ( message ) {
  return {
    type: constants.ADD_MESSAGE,
    message: message 
  };
};

module.exports.checkMessage = function checkMessage ( message ) {
  return {
    type: constants.CHECK_MESSAGE,
    message: message
  };
};

module.exports.stopMediation = function stopMediation () {
  return {
    type: constants.STOP_MEDIATION   
  };
};
