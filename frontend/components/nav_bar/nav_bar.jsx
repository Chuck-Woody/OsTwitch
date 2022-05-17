import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../app/assets/images/Logo/OsTwitch-logos_transparent.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='nav-bar-container'>
        <div className='nav-bar logo-container'>
          <img className="logo" src={logo} />
         <div> Browse </div>
       
         <span> About </span>
        </div>
        <div>
          <input type="text" value="search" />
          <button><i className="fas fa-search"></i></button>
        </div>

        <div>
          <button onClick={() => this.props.openModal('login')}>Log In</button>
          <button onClick={() => this.props.openModal('signup')}> Sign Up</button>
        </div>
      </div>


    )
  }
}


export default NavBar





