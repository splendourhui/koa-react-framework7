
"use strict";

const React = require('react');

const Navbar = React.createClass({
  render()  {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="center">{this.props.name}</div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
