
"use strict";

import React from 'react';
import $$ from 'dom7';
import Pace from 'pace';

import App from './components/App/App';
import globals from './components/Utils/Globals';
import Test from './components/Message/Test';

globals.setIsAndroid(navigator.userAgent.toLowerCase().indexOf('android') >= 0);

$$(document).on('pageBeforeInit', (e) => {
  let page = e.detail.page;
  switch (page.name) {
    case 'test':
      React.render(
        <Test />,
        document.getElementById('details')
      );
      break;
  }
});

Pace.on('done', () => {
  React.render(
    <App />,
    document.getElementById('app')
  );
});
