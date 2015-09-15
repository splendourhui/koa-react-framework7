
"use strict";

import React from 'react';
import Framework7 from 'framework7';
import $$ from 'dom7';

import AppStore from '../../stores/AppStore';
import AppAction from '../../actions/AppAction';
import globals from '../Utils/Globals';
import {tabs} from '../../constants/AppConstants';

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
      pushState: true
    });
    globals.setApp(app);
    AppStore.addChangeListener(this._onChange.bind(this));
    $$('.view.tab').on('show', function () {
      AppAction.initCurrentTab($$(this).attr('id'));
    });
    app.showTab('#tab1');

  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let tabArray = [];
    let ctx = this;
    tabs.forEach((tab) => {
      tabArray.push(<Tab name={tab.name} current={ctx.state.currentTab} />);
    });
    return (
      <div className="views tabs toolbar-fixed">
        {tabArray}
        <Tabbar current={ctx.state.currentTab}/>
      </div>
    );
  }

  _onChange() {
    this.setState({
      currentTab: AppStore.getActiveTab()
    });
  }
}

export default App;
