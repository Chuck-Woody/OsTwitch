import React from 'react'
import ReactDOM from 'react-dom'
import {signup} from './actions/session'
import {configureStore} from './store/store.js'

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root")
  let store = configureStore()
  window.store = store

 console.log(root)
  ReactDOM.render(<h1> Under Construction - Come Back Soon!</h1>,root)

})