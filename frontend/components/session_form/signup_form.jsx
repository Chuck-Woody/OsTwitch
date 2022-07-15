import React from "react";
import logo from  '../../../app/assets/images/Logo/OsTwitch-logos_transparent.png'

class SignupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
    console.log("Sign Up fired")
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let errorBox = null;
    let {darkTheme} = this.props
    if (this.props.errors.length > 0 ) {
      errorBox = <div className="ErrorBox">{this.renderErrors()}</div>
    }

    return (
      <div className={`modal-background ${this.props.modal}`} onClick={this.props.closeModal}>
      <div  className={`modal-child ${darkTheme ? 'dark-theme' : 'light-theme'}`} onClick={e => e.stopPropagation()}>
      <div className={`modal-container-background ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className={`modal-logo-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
          <div className='modal-logo-wrapper'>
            <img className="modal logo" src={logo} />
          </div>
          <div className="modal-signup-splash-wrapper">
            <div className={`modal-login-splash ${darkTheme ? 'dark-theme' : 'light-theme'}`}> Sign Up for OsTwitch </div>
          </div>
          <button className={`modal-tab-button dark-theme ${darkTheme ? 'dark-theme' : 'light-theme'}`} onClick={() => {this.props.openModal('login');this.props.clearErrors()}}> Log In</button>
          {errorBox}
        </div>
      <form onSubmit={this.handleSubmit} className="modal-form" >
        <label className={`form-label ${darkTheme ? 'dark-theme': 'light-theme'}`}>Username:</label>
        <input className={`form-input ${darkTheme ? 'dark-theme': 'light-theme'}`} type="text" value={this.state.username} onChange={this.update('username')}/>
        
        <label className={`form-label ${darkTheme ? 'dark-theme': 'light-theme'}`}>Password:</label>
        <input className={`form-input ${darkTheme ? 'dark-theme': 'light-theme'}`} type="password" value={this.state.password} onChange={this.update('password')}/>
        
        <label className={`form-label ${darkTheme ? 'dark-theme': 'light-theme'}`}>Email:</label>
        <input className={`form-input ${darkTheme ? 'dark-theme': 'light-theme'}`} type="password" value={this.state.email} onChange={this.update('email')}/>

      <button className={`form-button ${darkTheme ? 'dark-theme': 'light-theme'}`}>Sign Up</button>
    </form>
    </div>
    </div>
    </div>

    
    
    )
  }
}

export default SignupForm