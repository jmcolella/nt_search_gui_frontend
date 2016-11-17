var constants = require( '../constants/app_constants' );

module.exports.toggleMediation = function toggleMediation () {
  return {
    type: constants.TOGGLE_MEDIATION
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

