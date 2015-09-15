
"use strict";

import React from 'react';
import {tabs} from '../../constants/AppConstants';
import AppStore from '../../stores/AppStore';

class Tabbar extends React.Component {
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
}

export default Tabbar;
