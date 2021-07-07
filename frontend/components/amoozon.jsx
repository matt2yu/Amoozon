import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashContainer from './home/splash_container';




class Amoozon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <Switch>
        <Route path="/*"><SplashContainer /></Route>
      </Switch>
    </div>
  )
  }
}

export default Amoozon;