
import keyMirror from 'keymirror';

export default {
  keys: keyMirror({
    APP_CHANGE_ACTIVE_TAB: null
  }),
  tabs: [
    {
      name: 'tab1',
      navName: 'Contact',
      tabName: 'Contact',
      tabIcon: 'icon ion-person'
    },
    {
      name: 'tab2',
      navName: 'tab2',
      tabName: 'tab2',
      tabIcon: 'icon ion-ionic'
    },
    {
      name: 'tab3',
      navName: 'tab3',
      tabName: 'tab3',
      tabIcon: 'icon ion-ionic'
    }
  ]
};
