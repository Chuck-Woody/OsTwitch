import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { updateChannel } from './util/channel_api_util'
import {addFollow, fetchFollows} from './actions/follow_actions'
import {signup} from './actions/session_actions'
import actionCable from 'actioncable'

document.addEventListener("DOMContentLoaded", () => { 
  const cable=actionCable.createConsumer('ws://localhost:3000/cable')

  let root = document.getElementById("root")
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user },
        channels: window.currentUser.channels,
        follows: window.currentUser.follows
      },
      session: { currentUserId: window.currentUser.user.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  window.signup = signup
  window.addFollow = addFollow
  window.updateChannel = updateChannel
  window.fetchFollows = fetchFollows
//  console.log(root)
  ReactDOM.render(<Root store={store} cable={cable} />,root)

})