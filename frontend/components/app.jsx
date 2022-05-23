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
import SideBar from './side_bar/side_bar';
import ChannelShow from './ChannelShow';

const App = () => (
  <div>
    <Modal /> 
    <NavBar />
    <div  className='left-mid-right'>
      <SideBar />
      <Switch>
        <Route exact to="/channel/" component={ChannelShow} />
        <Route exact to="/" component={HomePage} />
        {/* <Route to="/directory" component={Index} /> */}

        <Redirect to="/" />
      </Switch>
    </div>
   
  </div>
);

export default App;