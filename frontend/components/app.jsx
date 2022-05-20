import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

import HomePage from './homepage';
import Modal from './modal/modal'
import NavBar from "./nav_bar/nav_bar_container";

const App = () => (
  <div>
    <Modal /> 
    <NavBar />

    <Switch>
      <Route to="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
   
  </div>
);

export default App;