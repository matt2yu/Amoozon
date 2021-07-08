import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SplashContainer from './home/splash_container';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import Navbar from './navbar/navbar';


class Amoozon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/products/:productId"><ProductShowContainer /></Route>
        <Route exact path="/products"><ProductIndexContainer /></Route>
        <Route path="/*"><SplashContainer /></Route>
      </Switch>
    </div>
  )
  }
}

export default Amoozon;