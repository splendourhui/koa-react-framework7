
"use strict";

import React from 'react';

class MessageDate extends React.Component {
  render() {
    let ctx = this;
    return (
      <div className="messages-date">
        {ctx.props.date} <span>{ctx.props.time}</span>
      </div>
    );
  }
}

export default MessageDate;
