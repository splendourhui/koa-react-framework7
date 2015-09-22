
"use strict";

import React from 'react';
import Framework7 from 'framework7';
import $$ from 'dom7';

import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';
import globals from '../Utils/Globals';
import {tabs} from '../../constants/AppConstants';

import Navbar from '../Navbar/Navbar';
import Tab from '../Tab/Tab';
import Tabbar from '../Tabbar/Tabbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: AppStore.getActiveTab()
    };
  };

  componentDidMount() {
    let app = new Framework7({
      imagesLazyLoadThreshold: 50,
      animateNavBackIcon: !globals.getIsAndroid(),
      material: globals.getIsAndroid(),
      materialPageLoadDelay: globals.getIsAndroid()? 50 : 0,
      materialRipple: false
    });

    let mainView = app.addView('.view-main', {
      dynamicNavbar: !globals.getIsAndroid()
    });

    globals.setApp(app);
    globals.setMainView(mainView);
    AppStore.addChangeListener(this.onChange.bind(this));

    $$('.tab').on('show', function () {
      AppAction.initCurrentTab($$(this).attr('id'));
    });
    app.showTab('#tab1');
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      currentTab: AppStore.getActiveTab()
    });
  }

  render() {
    let tabArray = [];
    let ctx = this;
    let navName;
    tabs.forEach(tab => {
      tabArray.push(<Tab name={tab.name} current={ctx.state.currentTab}/>);
      if (tab.name === ctx.state.currentTab) {
        navName = tab.navName;
      }
    });
    let isAndroid = globals.getIsAndroid();
    if(!isAndroid) {
      return (
        <div className='views'>
          <div className='view view-main'>
            <Navbar name={navName}/>
            <div className="pages navbar-through toolbar-through">
              <div className='page'>
                <div className='page-content'>
                  <div className="tabs-animated-wrap">
                    <div className="tabs">
                      {tabArray}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Tabbar current={ctx.state.currentTab}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className='views'>
          <div className='view view-main' data-page='index'>
            <div className="pages navbar-fixed">
              <div className='page' data-page='index'>
                <Navbar name={navName}/>
                <div className='page-content'>
                  <div className="tabs-animated-wrap">
                    <div className="tabs">
                      {tabArray}
                    </div>
                  </div>
                </div>
                <Tabbar current={ctx.state.currentTab}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
