
"use strict";

const React = require('react');
const tabs = require('../../constants/AppConstants').tabs;
const Navbar = require('../Navbar/Navbar');
const {Tab1, Tab2, Tab3} = require('../TabContents');

const Tab = React.createClass({
  render() {
    let content;
    let navName;
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
    tabs.forEach((tab) => {
      if(tab.name === ctx.props.name) {
        navName = tab.navName;
      }
    });
    return (
      <div id={this.props.name} className='view tab'>
        <Navbar name={navName}/>
        <div className='pages navbar-fixed'>
          <div data-page={'page-' + this.props.name} className="page">
            <div className="page-content">
              <div className="content-block">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tab;
