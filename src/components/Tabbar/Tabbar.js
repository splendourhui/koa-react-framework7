
"use strict";

const React = require('react');
const tabs = require('../../constants/AppConstants').tabs;
const AppStore = require('../../stores/AppStore');

const Tabbar = React.createClass({

  render() {
    let tabArray = [];
    let ctx = this;
    tabs.forEach((tab) => {
      tabArray.push(
        <a href={'#' + tab.name}
          className={ctx.props.current === tab.name? 'tab-link active' : 'tab-link'}>
          <i className="icon ion-ionic"></i>
        </a>
      );
    });
    return (
      <div className="toolbar tabbar">
        <div className="toolbar-inner">
          {tabArray}
        </div>
      </div>
    );
  }
});

module.exports = Tabbar;
