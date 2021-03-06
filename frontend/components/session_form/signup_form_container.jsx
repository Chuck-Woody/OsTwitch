import { connect } from 'react-redux';
import React from 'react';
import { signup,clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);