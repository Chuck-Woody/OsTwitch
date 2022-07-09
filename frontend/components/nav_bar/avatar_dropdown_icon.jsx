import React from "react"
import DarkThemeSlider from './dark_slider.jsx'

function AvatarDropDownIcon(props) {
  
  return (
    <button className='avatar-btn' onClick={() => props.openModal('avatar')}>
  
      <i class="fas fa-user-ninja"></i>

    </button>
  ) 
}


export default AvatarDropDownIcon