import React from "react";


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
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.update('username')}/>
        </label>
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        <label>Email:
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>
      <button >Sign Up</button>
      </form>
      <div>
        <h1>{this.renderErrors()}</h1>
      </div>
    </div>)
  }
}

export default SignupForm