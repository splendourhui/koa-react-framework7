
"use strict";

import React from 'react';
import MessageDate from './MessageDate'
import MessageSent from './MessageSent'
import MessageReceived from './MessageReceived'

class Test extends React.Component {
  render() {
    return (
      <div className="page-content messages-content">
        <div className="messages messages-init" data-auto-layout="true" data-new-messages-first="false">
          <MessageDate date="Sunday, Feb 9" time="12:58" />
          <MessageSent message="Hello" />
          <MessageSent message="How are you?" />
          <MessageReceived message="Fine. Thank you." name="Kate" />
          <MessageReceived message="And you?" name="Kate" />
          <MessageDate date="Sunday, Feb 9" time="13:00" />
          <MessageSent message="I'm fine. Thanks." />
        </div>
      </div>
    );
  }
}

export default Test;
