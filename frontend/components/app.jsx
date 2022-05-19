import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal'
import NavBar from "./nav_bar/nav_bar_container";

const App = () => (
  <>
  
    <Modal /> 
    <NavBar />
    <div className="body"> 
      Body PlaceHolder
    </div>
  </>
);

export default App;