import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../app/assets/images/Logo/OsTwitch-logos_transparent.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount(){
    console.log("Current User", this.props.currentUser)
  }

  render() {
    let buttonsLoggedIn = null 
    if (this.props.currentUser) {
      buttonsLoggedIn = (<div className="modal-initiation-button-wrapper">
        <button className="nav-bar-logout-btn" onClick={() => this.props.logout()}>Log Out</button>
      </div>)
    } else {
      buttonsLoggedIn = (<div className="modal-initiation-button-wrapper">
        <button className="nav-bar-login-btn" onClick={() => this.props.openModal('login')}>Log In</button>
        <button className="nav-bar-signup-btn" onClick={() => this.props.openModal('signup')}> Sign Up</button>
      </div>)
     
    }
    return (
      
      <div className='nav nav-bar-container'>
        
        <div className='nav-bar logo-container'>
          <img className="nav logo" src={logo} />
         <div className="nav-browse"> Browse </div>
       
         <span className="nav-about"> <i className="fas fa-ellipsis-v"></i> </span>
        </div>
          <div className="nav-search-bar-container">
            <div className="nav-search-bar-button-wrapper">
              <input className="nav nav-search-input"type="text" value="Search" />
              <button className="nav-search-button"><i className="nav-search-button-icon fas fa-search"></i></button>
              
          </div>
        </div>

        <div className="nav modal-initiation-container">
          {buttonsLoggedIn}
        </div>
      </div>


    )
  }
}


export default NavBar





