import React from "react"

function AvatarDropDownIcon(props) {
  
  let {currentUser} = props
  let avatarDropDownButton;

  if (currentUser) {
    avatarDropDownButton = (
      <button className='avatar-btn logged_in' onClick={() => props.openModal('avatar')}>
  
        <i class="fas fa-user-ninja"></i>

      </button>
    )
  } else {
    avatarDropDownButton = (
      <button className='avatar-btn' onClick={() => props.openModal('avatar')}>
  
      <i class="fas fa-user-ninja"></i>

    </button>
    )
  }

  return (
    avatarDropDownButton
  ) 
}


export default AvatarDropDownIcon