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
         <span> Browse </span>
       
         <span> About </span>
        </div>
        <div>
          <input type="text" value="search" />
          <button>Insert Font Awesome Magnifying Glass</button>
        </div>

        <div>
          <button>Log In</button>
          <button> Sign Up</button>
        </div>
      </div>


    )
  }
}


export default NavBar