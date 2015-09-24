
"use strict";

import MessageDispatcher from '../dispatchers/MessageDispatcher';
import {EventEmitter} from 'events';
import MessageConstants from '../constants/MessageConstants';

let CHANGE_EVENT = 'change';

class MessageStore extends EventEmitter {
  constructor(props) {
    super(props);
    this._values = {};
  }

  loadTestMessages(suc, err) {
    let messages = MessageConstants.testMessages;
    this._values.messages = messages;
    setTimeout(suc(messages), 500);
  }

  getCurrentMessages() {
    return this._values.messages;
  }

  sendMessage(message, suc, err) {
    let item = {
      type: 'messageSent',
      message: message
    };
    this._values.messages.push(item);
    suc();
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let store = new MessageStore();

MessageDispatcher.register((action) => {
  switch(action.actionType) {
    case MessageConstants.keys.LOAD_TEST_MESSAGES:
      store.loadTestMessages(action.suc, action.err);
      break;
    case MessageConstants.keys.SEND_MESSAGE:
      store.sendMessage(action.message, action.suc, action.err);
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
