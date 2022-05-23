import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { updateChannel } from './util/channel_api_util'
import { login,signup,logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root")
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  window.signup = signup

  window.updateChannel = updateChannel
  window.login = login
  window.logout = logout
 console.log(root)
  ReactDOM.render(<Root store={store} />,root)

})