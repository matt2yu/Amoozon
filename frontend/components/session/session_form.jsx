import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showFirstAndLastName = this.showFirstAndLastName.bind(this);
    this.showConfirmPassword = this.showConfirmPassword.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.insertDemoUser = this.insertDemoUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);

  }
    ComponentDidMount() {
      this.props.clearErrors();
    }

    handleInput(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
      // .then(() => { this.props.history.push('/')
      // });
    }

    renderErrors() {
      if (this.props.errors !== undefined) 
    {return (
      <ul>
        {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
          ))}
      </ul>
      )}
  }

  passwordMatch() {
    return this.state.password === this.state.confirmPassword
  }

  showFirstAndLastName() {
    if (this.props.formType ==='signup') {
      return (
      <div>
        <label>first name
        <br />
        <input type="text"
          value={this.state.first_name}
          onChange={this.handleInput('first_name')}
          className='signup-input'
        />
      </label>
      <br />
      <label>last name
        <br />
        <input type="text"
          value={this.state.last_name}
          onChange={this.handleInput('last_name')}
          className='signup-input'
        />
        </label>
      </div>)
    }
  }

  showConfirmPassword() {
    if (this.props.formType ==='signup') {
      return (
      <div>
        <label>Re-enter Password
        <br />
        <input type="password"
          value={this.state.confirmPassword}
          onChange={this.handleInput('confirmPassword')}
          className='signup-input'
        />
        </label>
      </div>)
    }
  }

  demoUser(e) {
    e.preventDefault();
      const demoAccount = ({
      email: 'demo-user@email.com',
      first_name: 'Demo',
      last_name: "User",
      password: 'password'
    });
    this.props.processForm(demoAccount)
    // .then(() => this.props.history.push('/home'))
  }

      insertDemoUser () {
        if (this.props.formType === 'login') {
          return (
            <div className='demo-login'>
              <p className='subtitle-text'>Demo User Login</p>
              <button className='demo-button' onClick={this.demoUser}></button>
            </div>
          )
        }
      }

      render() {
        return (
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2 className='title-text'>Welcome back!</h2>
              <br/>
              <p className='subtitle-text'>We're so excited to see you again!</p>
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                {this.showFirstAndLastName()}
                <br/>
                <label>email
                  <br/>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.handleInput('email')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>password
                <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    className="login-input"
                  />
                </label>
                {this.showConfirmPassword()}
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
                <p>Need an Account? {this.props.navLink}</p> 
                <br />
                {this.insertDemoUser()}
              </div>
            </form>
          </div>
        );
      }
    }
    
export default SessionForm;

