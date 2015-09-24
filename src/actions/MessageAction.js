
"use strict";

const MessageDispatcher = require('../dispatchers/MessageDispatcher');
const MessageConstants = require('../constants/MessageConstants');

let actions = {
  loadTestMessages: (suc, err) => {
    MessageDispatcher.dispatch({
      actionType: MessageConstants.keys.LOAD_TEST_MESSAGES,
      suc,
      err
    });
  },
  sendMessage: (message, suc, err) => {
    MessageDispatcher.dispatch({
      actionType: MessageConstants.keys.SEND_MESSAGE,
      message,
      suc,
      err
    });
  }
};

module.exports = actions;
