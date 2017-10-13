import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
<<<<<<< HEAD
import store from '../store';
=======
import axios from 'axios';
import store, { gotMessagesFromServer }  from '../store';
>>>>>>> 0b02f068c37ed5df879eeb340f1743542489b079

export default class Messages extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
<<<<<<< HEAD
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
=======
    axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => {
        const action = gotMessagesFromServer(messages)
        store.dispatch(action)
      })
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  }

  componentWillUnmount() {
>>>>>>> 0b02f068c37ed5df879eeb340f1743542489b079
    this.unsubscribe();
  }

  render () {

    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.state.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId);
    console.log(this.state);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}
