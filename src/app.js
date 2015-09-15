
"use strict";

const React = require('react');
const App = require('./components/App/App');
const Pace = require('pace');

Pace.on('done', () => {
  React.render(
    <App />,
    document.body
  );
});
