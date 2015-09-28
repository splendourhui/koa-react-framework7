
"use strict";

import React from 'react';
import {tabs} from '../../constants/AppConstants';
import Navbar from '../Navbar/Navbar';
import {Tab1, Tab2, Tab3} from '../TabContents';

class Tab extends React.Component {
  render() {
    let content;
    let ctx = this;
    switch(this.props.name){
      case 'tab1':
        content = <Tab1 />;
        break;
      case 'tab2':
        content = <Tab2 />;
        break;
      case 'tab3':
        content = <Tab3 />;
        break;
      default:
        content = <Tab2 />;
        break;
    }
    let active = '';
    if (this.props.name === this.props.current) {
      active = 'active';
    }
    return (
      <div id={this.props.name} className={`tab ${active}`}>
        {content}
      </div>
    );
  }
}

export default Tab;
