
"use strict";

import React from 'react';
import App from './components/App/App';
import Pace from 'pace';

Pace.on('done', () => {
  React.render(
    <App />,
    document.body
  );
});
