import {createStore} from 'redux'

//ACTION TYPES
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

//ACTION CREATORS
export const gotMessagesFromServer = function (messages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER, // be sure to use the constant, not a string literal
    messages: messages
  };
};

export const writeMessage = function(inputContent) {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: inputContent
  }
}

export const gotNewMessageFromServer = function(message) {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  }
}

//INITIAL STATE
const initialState = {
  messages: [],
  newMessageEntry: ''
}

//REDUCER
function reducer (state = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, state, { messages: action.messages });
    case WRITE_MESSAGE:
      return Object.assign({}, state, {newMessageEntry: action.newMessageEntry});
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, state, {messages: [...state.messages, action.message]})
    default:
      return state
  }
}

// STORE
const store = createStore(reducer);
export default store;
