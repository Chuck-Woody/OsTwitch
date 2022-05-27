import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

import HomeIndex from './HomeIndex/home_index_container';
import Modal from './modal/modal'
import NavBar from "./nav_bar/nav_bar_container";
import SideBarContainer from './side_bar/side_bar_container';
import ChannelShowContainer from './channel/channel_show_container';

const App = ({cable}) => (
  <div>
    <Modal /> 
    <NavBar />
    <div  className='left-mid-right'>
      <SideBarContainer />
      <Switch>
        <Route exact path="/channel/:id" render={()=> <ChannelShowContainer cable={cable}/>}/>
        <Route exact path="/" component={HomeIndex} />

        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
   
  </div>
);

export default App;