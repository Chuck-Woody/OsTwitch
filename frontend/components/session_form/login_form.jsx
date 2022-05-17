import React from "react";

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
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" value={this.state.username}/>
        </label>
        <label>Password:
          <input type="password" value={this.state.password}/>
        </label>
      </form>
      <button>Log In</button>

    </div>
    )
  }
}

export default loginForm