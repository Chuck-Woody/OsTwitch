import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { toggleDark } from '../../actions/ui_state_actions';

import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AvatarDropDown from '../nav_bar/avatar_dropdown';

function Modal({modal,toggleDark, closeModal,currentUserId,darkTheme}) {
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
      // console.log('the modal should display the AvatarDropDown')
      component = <AvatarDropDown currentUserId={currentUserId} modal={modal} closeModal={closeModal} toggleDark={toggleDark} />
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
    darkTheme: state.ui.ui_state.dark_theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    toggleDark: () => dispatch(toggleDark())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);