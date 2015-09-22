
"use strict";

import React from 'react';
import $$ from 'dom7';
import Pace from 'pace';

import App from './components/App/App';
import globals from './components/Utils/Globals';

globals.setIsAndroid(navigator.userAgent.toLowerCase().indexOf('android') >= 0);

$$(document).on('pageBeforeInit', (e) => {
  let page = e.detail.page;
  switch (page.name) {
    case 'test':
      break;
  }
});

Pace.on('done', () => {
  React.render(
    <App />,
    document.getElementById('app')
  );
});
