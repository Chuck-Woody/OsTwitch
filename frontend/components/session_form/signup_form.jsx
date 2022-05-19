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
    if (this.props.errors.length > 0 ) {
      errorBox = <div className="ErrorBox">{this.renderErrors()}</div>
    }

    return (
      <div >
      <form onSubmit={this.handleSubmit} className="modal-form-background">
        <div className='modal-logo-container'>
          <div className='modal-logo-wrapper'>
            <img className="modal logo" src={logo} />
          </div>
          <div className="modal-signup-splash-wrapper">
            <div className="modal-signup-splash"> Sign up for OsTwitch </div>
          </div>
          <button className="nav-bar-login-btn" onClick={() => this.props.openModal('login')}>Log In</button>
          {errorBox}
        </div>
        <label>Username:</label>
        <input type="text" value={this.state.username} onChange={this.update('username')}/>
        
        <label>Password:</label>
        <input type="password" value={this.state.password} onChange={this.update('password')}/>

        <label>Email:</label>
        <input type="email" value={this.state.email} onChange={this.update('email')}/>
        
        
      <button>Sign Up</button>
      </form>
    </div>)
  }
}

export default SignupForm