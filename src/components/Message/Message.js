
"use strict";

import React from 'react';

import MessageDate from './MessageDate'
import MessageSent from './MessageSent'
import MessageReceived from './MessageReceived'

import globals from '../Utils/Globals';
import MessageAction from '../../actions/MessageAction';
import MessageStore from '../../stores/MessageStore';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  };

  componentDidMount() {
    let app = globals.getApp();
    this.myMessages = app.messages('.messages', {
      autoLayout: true
    });

    this.loadTestMessages();
    MessageStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    MessageStore.removeChangeListener(this.onChange);
  }

  loadTestMessages() {
    MessageAction.loadTestMessages((data) => {
      this.setState({
        messages: data
      });
    }, () => {
      this.setState({
        messages: []
      });
    });
  }

  onChange() {
    this.setState({
      messages: MessageStore.getCurrentMessages()
    });
    this.myMessages.scrollMessages();
  }

  render() {
    let messages = [];
    this.state.messages.forEach(message => {
      let item = '';
      switch (message.type) {
        case 'date':
          item = <MessageDate date={message.date} time={message.time} />
          break;
        case 'messageSent':
          item = <MessageSent message={message.message} />
          break;
        case 'messageReceived':
          item = <MessageReceived message={message.message} name={message.name} />
          break;
        default:
          break;
      }
      messages.push(item);
    });
    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
}

export default Message;
