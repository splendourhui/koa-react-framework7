
const keyMirror = require('keymirror');

module.exports = {
  keys: keyMirror({
    APP_CHANGE_ACTIVE_TAB: null
  }),
  tabs: [
    {
      name: 'tab1',
      navName: 'tab1'
    },
    {
      name: 'tab2',
      navName: 'tab2'
    },
    {
      name: 'tab3',
      navName: 'tab3'
    }
  ]
};
