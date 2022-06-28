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
        <li>
          Log Out
        </li>
      </ul>
    )
  } else {
   dropDownItems=( <ul className="dropdown">
    <li>
      <DarkThemeSlider />
    </li>
    <li>
      Log In
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