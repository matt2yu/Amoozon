import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {
    return(
    <div className="splash-page">
      <div className="hero-banner">
        <img className="hero-image" src={window.splash} alt="splash page background" />
      </div>

    </div>
  )
}

export default Splash;
