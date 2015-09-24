import keyMirror from 'keymirror';

export default {
  keys: keyMirror({
    LOAD_TEST_MESSAGES: null,
    SEND_MESSAGE: null
  }),
  testMessages: [
    {
      type: 'date',
      date: 'Sunday, Feb 9',
      time: '12:58'
    },
    {
      type: 'messageSent',
      message: 'Hello!'
    },
    {
      type: 'messageSent',
      message: 'How are you?'
    },
    {
      type: 'messageReceived',
      name: 'Kate',
      message: 'Fine. Thankyou.'
    },
    {
      type: 'messageReceived',
      name: 'Kate',
      message: 'And you?'
    },
    {
      type: 'date',
      date: 'Sunday, Feb 9',
      time: '13:00'
    },
    {
      type: 'messageSent',
      message: 'I\'m fine. Thanks!'
    }
  ]
};
