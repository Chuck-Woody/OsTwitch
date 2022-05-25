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

  render() {
    
    let errorBox = null;
    if (this.props.errors.length > 0 ) {
      errorBox = <div className="ErrorBox">{this.renderErrors()}</div>
    }
    return (
    <div className="modal-container-background">
        <div className='modal-logo-container'>
          <div className='modal-logo-wrapper'>
            <img className="modal logo" src={logo} />
          </div>
          <div className="modal-login-splash-wrapper">
            <div className="modal-login-splash"> Log in to OsTwitch </div>
          </div>
          <button className="nav-bar-signup-btn" onClick={() => this.props.openModal('signup')}> Sign Up</button>
          {errorBox}
        </div>
      <form onSubmit={this.handleSubmit} className="modal-form" >
        <label>Username:</label>
        <input type="text" value={this.state.username} onChange={this.update('username')}/>
        
        <label>Password:</label>
        <input type="password" value={this.state.password} onChange={this.update('password')}/>
        
      <button>Log In</button>
      </form>
    </div>
    )
  }
}

export default loginForm