
"use strict";

const React = require('react');
const Framework7 = require('framework7');
const $$ = require('dom7');
const Tab = require('../Tab/Tab');
const globals = require('../Utils/Globals');
const AppStore = require('../../stores/AppStore');
const AppAction = require('../../actions/AppAction');
const tabs = require('../../constants/AppConstants').tabs;
const Tabbar = require('../Tabbar/Tabbar');

const App = React.createClass({
  getInitialState() {
    return {
      currentTab: AppStore.getActiveTab()
    };
  },

  componentDidMount() {
    let app = new Framework7({
      pushState: true
    });
    globals.setApp(app);
    AppStore.addChangeListener(this._onChange);
    $$('.view.tab').on('show', function () {
      AppAction.initCurrentTab($$(this).attr('id'));
    });
    app.showTab('#tab1');

  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },

  render() {
    let tabArray = [];
    let ctx = this;
    tabs.forEach((tab) => {
      tabArray.push(<Tab name={tab.name} current={ctx.state.currentTab} />);
    });
    return (
      <div className='views tabs toolbar-fixed'>
        {tabArray}
        <Tabbar current={ctx.state.currentTab}/>
      </div>
    );
  },

  _onChange() {
    this.setState({
      currentTab: AppStore.getActiveTab()
    });
  }
});

module.exports = App;
