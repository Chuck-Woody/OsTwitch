import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../app/assets/images/Logo/OsTwitch-logos_transparent.png'
import AvatarDropDownIcon from './avatar_dropdown_icon'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount(){
    // console.log("Current User", this.props.currentUser)
  }

  render() {
    let buttonsLoggedIn = null 
    let {darkTheme} = this.props
    if (this.props.currentUser) {
      buttonsLoggedIn = (<div className="modal-initiation-button-wrapper">
        {/* <button className={`nav-bar-logout-btn ${darkTheme ? `dark-theme` : `light-theme`}` } onClick={() => this.props.logout()}>Log Out</button>
        <img className="home-index-channel-logo" src={`https://robohash.org/${this.props.userInfo.username}.png`}></img>
        <div> Welcome {this.props.userInfo.username} </div> */}
         <AvatarDropDownIcon currentUser={this.props.currentUser}  openModal={this.props.openModal}/>
      </div>)
    } else {
      buttonsLoggedIn = (<div className="modal-initiation-button-wrapper">
        <button className={`nav-bar-login-btn ${darkTheme ? `dark-theme` : `light-theme`}`} onClick={() => this.props.openModal('login')}>Log In</button>
        <button className={`nav-bar-signup-btn ${darkTheme ? `dark-theme` : `light-theme`}`} onClick={() => this.props.openModal('signup')}> Sign Up</button>
        <AvatarDropDownIcon currentUser={this.props.currentUser}  openModal={this.props.openModal}/>
      </div>)
     
    }
    return (
      
      <div className={`nav nav-bar-container  ${darkTheme ? `dark-theme` : `light-theme`}`}>
        
        <div className={`nav-bar logo-container ${darkTheme ? `dark-theme` : `light-theme`}`}>
          <Link to="/">
            <img className="nav logo" src={logo} />
          </Link>
          <Link to="/">
            <div className={`nav-browse ${darkTheme ? `dark-theme` : `light-theme`}`}> Browse </div>
          </Link>
       
         <span className={`nav-about ${darkTheme ? `dark-theme` : `light-theme`}`}> <i className={`fas fa-ellipsis-v ${darkTheme ? `dark-theme` : `light-theme`}`} ></i> </span>
        </div>
          <div className={`nav-search-bar-container ${darkTheme ? `dark-theme` : `light-theme`}`}>
            <div className="nav-search-bar-button-wrapper">
              <input className={`nav nav-search-input  ${darkTheme ? `dark-theme` : `light-theme`}`} type="text" value="Search" />
              <button className={`nav-search-button  ${darkTheme ? `dark-theme` : `light-theme`}`}><i className="nav-search-button-icon fas fa-search"></i></button>  
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





