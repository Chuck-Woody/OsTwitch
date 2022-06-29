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
      <div className={`modal-background ${this.props.modal}`} onClick={this.props.closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
      <div className="modal-container-background">
        <div className='modal-logo-container'>
          <div className='modal-logo-wrapper'>
            <img className="modal logo" src={logo} />
          </div>
          <div className="modal-signup-splash-wrapper">
            <div className="modal-signup-splash"> Sign Up for OsTwitch </div>
          </div>
          <button className="nav-bar-login-btn" onClick={() => {this.props.openModal('login');this.props.clearErrors()}}> Log In</button>
          {errorBox}
        </div>
      <form onSubmit={this.handleSubmit} className="modal-form" >
        <label>Username:</label>
        <input className="form-input" type="text" value={this.state.username} onChange={this.update('username')}/>
        
        <label>Password:</label>
        <input className="form-input" type="password" value={this.state.password} onChange={this.update('password')}/>
        
        <label>Email:</label>
        <input className="form-input" type="email" value={this.state.email} onChange={this.update('email')}/>

      <button className="form-button">Sign In</button>
    </form>
    </div>
    </div>
    </div>

    
    
    )
  }
}

export default SignupForm