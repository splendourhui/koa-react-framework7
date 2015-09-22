
"use strict";

import React from 'react';

class MessageSent extends React.Component {
  render() {
    let ctx = this;
    return (
      <div className="message message-sent">
        <div className="message-text">{ctx.props.message}</div>
      </div>
    );
  }
}

export default MessageSent;
