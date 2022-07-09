import React from "react";
import DarkThemeSlider from './dark_slider'

function AvatarDropDown(props) {
  console.log("avatar dropdown props:",props)
  let dropDownItems;
  let {darkTheme} = props
  if (props.currentUserId) {
    dropDownItems = (
      <ul className={`dropdown ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <li>
          <i className={`fal fa-moon ${darkTheme ? 'dark-theme' : 'light-theme'}`}></i>
          <DarkThemeSlider toggleDark={props.toggleDark} />
        </li>
        <li id='borderline' className="avatar-box-underline">border</li>
        <li className='avatar-button-item'>
          <button className="dropdown-logout">
            <i class="fas fa-door-open"></i>
            <span className="logout-text">Log Out</span>
          </button>
        </li>
      </ul>
    )
  } else {
   dropDownItems=(  <ul className={`dropdown ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
    <li>
      <DarkThemeSlider toggleDark={props.toggleDark}/>
    </li>
    <li className="avatar-box-underline"></li>
    <li>
      <button  onClick={() => props.openModal('login')}className={`${darkTheme ? 'dark-theme' : 'light-theme'} dropdown-login nav-bar-login `}>
        <i className="fas fa-door-open"></i>
        <span className="login-text">Log In</span>
      </button>
    </li>
  </ul>)
  }

  return(
    <div className={`${props.modal}-modal-background`} onClick={props.closeModal}>
      <div className={`${props.modal}-modal-child`} onClick={e => e.stopPropagation()}>
        {dropDownItems}
        
      </div>
    </div>
  )
}

export default AvatarDropDown