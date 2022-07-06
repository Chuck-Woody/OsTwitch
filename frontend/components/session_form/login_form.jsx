import React from "react";
import logo from  '../../../app/assets/images/Logo/OsTwitch-logos_transparent.png'
class loginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.demoLogin = this.demoLogin.bind(this)
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
  demoLogin(e){
    e.preventDefault()
    this.props.processForm({username: "DemoUser",
    password: 123456,
    email:  "DemoUser@gmail.com"}).then(this.props.closeModal)

  }

  render() {
    let {darkTheme} = this.props
    console.log(`the login-form's dark-theme:`,darkTheme)
    let errorBox = null;
    if (this.props.errors.length > 0 ) {
      errorBox = <div className="ErrorBox">{this.renderErrors()}</div>
    }
    return (
      <div className={`modal-background ${this.props.modal}`} onClick={this.props.closeModal}>
      <div className={`modal-child ${darkTheme ? 'dark-theme' : 'light-theme'}`} onClick={e => e.stopPropagation()}>
    <div className={`modal-container-background ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className={`modal-logo-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
          <div className='modal-logo-wrapper'>
            <img className="modal logo" src={logo} />
          </div>
          <div className="modal-login-splash-wrapper">
            <div className="modal-login-splash"> Log in to OsTwitch </div>
          </div>
          <button className={`modal-tab-button dark-theme ${darkTheme ? 'dark-theme' : 'light-theme'}`} onClick={() => {this.props.openModal('signup'); this.props.clearErrors()}}> Sign Up</button>
          {errorBox}
        </div>
      <form onSubmit={this.handleSubmit} className="modal-form" >
        <label className={`form-label ${darkTheme ? 'dark-theme': 'light-theme'}`}>Username:</label>
        <input className={`form-input ${darkTheme ? 'dark-theme': 'light-theme'}`} type="text" value={this.state.username} onChange={this.update('username')}/>
        
        <label className={`form-label ${darkTheme ? 'dark-theme': 'light-theme'}`}>Password:</label>
        <input className={`form-input ${darkTheme ? 'dark-theme': 'light-theme'}`} type="password" value={this.state.password} onChange={this.update('password')}/>
        
      <button className={`form-button ${darkTheme ? 'dark-theme': 'light-theme'}`}>Log In</button>
      <button onClick={this.demoLogin} className="form-button">Demo User Log In</button>

      </form>
    </div>
    </div>
    </div>
    )
  }
}

export default loginForm