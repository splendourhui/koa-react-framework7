
"use strict";

import React from 'react';

class MessageReceived extends React.Component {
  render() {
    let ctx = this;
    return (
      <div className="message message-received">
        <div className="message-name">{ctx.props.name}</div>
        <div className="message-text">{ctx.props.message}</div>
      </div>
    );
  }
}

export default MessageReceived;
