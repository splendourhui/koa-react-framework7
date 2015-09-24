
"use strict";

import React from 'react';
import $$ from 'dom7';

import globals from '../Utils/Globals';
import MessageAction from '../../actions/MessageAction';
import MessageStore from '../../stores/MessageStore';

class MessageBar extends React.Component {
  componentDidMount() {
    let app = globals.getApp();
    let myMessagebar = app.messagebar('.messagebar', {
      maxHeight: 200
    });
    $$('.messagebar .link').on('click', () => {
      let messageText = myMessagebar.value().trim();
      if (messageText.length === 0) return;
      MessageAction.sendMessage(messageText, () => {
        // success
        myMessagebar.clear();
      }, () => {
        // failed
      });
    })
  }

  render() {
    return (
      <div className="toolbar-inner">
        <textarea placeholder="Message" />
        <a herf="#" className="link send-button">Send</a>
      </div>
    );
  }
}

export default MessageBar;
