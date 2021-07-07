import React from 'react';
import { Link } from 'react-router-dom';
// import { LightLogo } from '../navbar/logo';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    if (this.passwordMatch()) this.props.signup(user);
  }

  passwordMatch() {
    return this.state.password === this.state.confirmPassword
  }

  loginDemo() {
    this.setState({firstName: "Demo", lastName: "User", email: "demo-user@email.com", password: "password", confirmPassword: "password"})
    const demo = {email: "demo-user@email.com", password: "password"}
    this.props.login(demo);
  }

  renderErrors() {
    return(
      <ul className="session-error-list">
        {this.props.errors.map((error,idx) => <li className="session-error" key={`error-${idx}`}>{error}</li>)}
        {this.passwordMatch() ? "" : <li className="session-error" key="error-confirm">Passwords do not match</li>}
      </ul>
    )
  }

  render() {
    return(
      <main className="auth-page">
        <form onSubmit={this.handleSubmit} className="auth-form">
          <h1>Create account</h1>
          <label>First name
            <input type="text" value={this.state.firstName} onChange={this.handleInput("firstName")} />
          </label>
          <label>Last name
            <input type="text" value={this.state.lastName} onChange={this.handleInput("lastName")} />
          </label>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
          </label>
          <label>Re-enter password
            <input type="password" value={this.state.confirmPassword} onChange={this.handleInput("confirmPassword")} />
          </label>
          <div className="auth-errors">{this.renderErrors()}</div>
          <button type="submit" className="submit-button auth-button glow-on-click">Create your Amoozon account</button>
          <button type="button" onClick={this.loginDemo} className="submit-button demo-button demo-glow-on-click">Sign-In as demo user</button>
          <p id="auth-conditions">By creating an account, you agree to Amoozon's Conditions of Use and Privacy Notice.</p>
        </form>

        <div className="redirect-to-login">
          <span>Already have an account?</span>
          <span><Link className="login-link" to="/login">Sign-In</Link></span>
        </div>
      </main>
    );
  }
}

export default SignupForm;