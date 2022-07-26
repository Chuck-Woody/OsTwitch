import React from 'react';
import { connect } from 'react-redux';

import { closeModal, openModal } from '../../actions/modal_actions';
import { toggleDark } from '../../actions/ui_state_actions';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AvatarDropDown from '../nav_bar/avatar_dropdown';
import { logout } from '../../actions/session_actions';
import { fetchChannels } from '../../actions/channel_actions';

function Modal({users, modal,toggleDark,openModal, closeModal,currentUserId,darkTheme,logout,channelInfo}) {
  if (!modal) {
    return null;
  }
  let component;
  // console.log("Right before switch")
  switch (modal) {
    case 'login':
      component = <LoginFormContainer darkTheme={darkTheme} modal={modal} closeModal={closeModal}/>;
      break;
    case 'signup':
      // console.log("firing signup")

      component = <SignupFormContainer darkTheme={darkTheme} modal={modal} closeModal={closeModal}/>;
      break;
    case 'avatar':
      component = <AvatarDropDown users={users} channelInfo={channelInfo} logout={logout} openModal={openModal} darkTheme={darkTheme} currentUserId={currentUserId} modal={modal} closeModal={closeModal} toggleDark={toggleDark} />
      break;
    default:
      return null;
  }
  return (
      <>
        { component }
      </>
  
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUserId: state.session.currentUserId,
    darkTheme: state.ui.ui_state.dark_theme,
    channelInfo: state.entities.channels,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    closeModal: () => dispatch(closeModal()),
    toggleDark: () => dispatch(toggleDark()),
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);