
import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser} = this.props;

    const LogButton = currentUser ? (
      <div className='login-container'>
        <button className='log-button' onClick={() => this.props.logout()}>Logout</button>
      </div>
    ) : (
      <div className='login-container'>
        <Link className='log-button' to="/login">Login</Link>
      </div>
    )

    const SplashButtons = currentUser ? (
      <>
        <Link className='splash-home'to="/home">Enter Amoozon</Link>
      </>
    ) : (
      <div className='splash-button-container'>
        <Link className='splash-signup' to="/signup">Sign up</Link>
      </div>
    )

    return(
      <div>

        <div 
          className='splash'>

          <div className='nav-container'>
            <nav className='nav-bar'>
              <a href="https://github.com/matt2yu" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a>
            </nav>
            {LogButton}
          </div>

          <div className='splash-content'>

            {SplashButtons}
          </div>
        </div>

      </div>

    )
  }
}

export default Splash