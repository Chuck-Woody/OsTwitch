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
    return (
    <div>

      
      <form onSubmit={this.handleSubmit} className="modal-form-background">
        <div className='modal-logo-container'>
          <img className="modal logo" src={logo} />
          <div className="modal-signup-splash"> Sign in to OsTwitch </div>
        </div>
        <label>Username:</label>
          <input type="text" value={this.state.username} onChange={this.update('username')}/>
        <label>Password:</label>
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        <label>Email:</label>
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        
      <button >Sign Up</button>
      </form>
      <div>
        <h1>{this.renderErrors()}</h1>
      </div>
    </div>)
  }
}

export default SignupForm