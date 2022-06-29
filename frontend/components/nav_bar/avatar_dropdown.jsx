import React from "react";
import DarkThemeSlider from './dark_slider'

function AvatarDropDown(props) {
  console.log(props)
  let dropDownItems;

  if (props.currentUserId) {
    dropDownItems = (
      <ul className="dropdown">
        <li>
          <i class="fal fa-moon"></i>
          <DarkThemeSlider />
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
   dropDownItems=( <ul className="dropdown">
    <li>
      <DarkThemeSlider />
    </li>
    <li className="avatar-box-underline"></li>
    <li>
      <button className="dropdown-login nav-bar-login">
        <i class="fas fa-door-open"></i>
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