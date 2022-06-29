import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import loginForm from '../session_form/login_form';
import SignupFormContainer from '../session_form/signup_form_container';
import AvatarDropDown from '../nav_bar/avatar_dropdown';

function Modal({modal, closeModal,currentUserId}) {
  if (!modal) {
    return null;
  }
  let component;
  // console.log("Right before switch")
  switch (modal) {
    case 'login':
      component = <LoginFormContainer modal={modal} closeModal={closeModal}/>;
      break;
    case 'signup':
      // console.log("firing signup")

      component = <SignupFormContainer modal={modal} closeModal={closeModal}/>;
      break;
    case 'avatar':
      console.log('the modal should display the AvatarDropDown')
      component = <AvatarDropDown currentUserId={currentUserId} modal={modal} closeModal={closeModal} />
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
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);