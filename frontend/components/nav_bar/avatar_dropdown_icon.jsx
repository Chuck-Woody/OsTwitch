import React from "react"
import DarkThemeSlider from './dark_slider.jsx'

function AvatarDropDownIcon(props) {
  
  return (
    <div onClick={() => props.openModal('avatar')}>
  
      <i class="fas fa-user-ninja"></i>

    </div>
  ) 
}


export default AvatarDropDownIcon