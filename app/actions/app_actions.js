var constants = require( '../constants/app_constants' );

module.exports.toggleMediation = function toggleMediation ( type ) {
  return {
    type: type === "start" ? constants.START_MEDIATION : constants.STOP_MEDIATION 
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

