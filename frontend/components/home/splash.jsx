import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {
  return(
  <div className="splash-page">
    <div className="amoozon-banner">
      <img className="" src={window.splash} alt="splash page background" />
    </div>
    <section className="cards">
      <Link className="card" onClick={() => props.fetchProducts('', 'Electronics')} to="/products?search=&category=Electronics">
        <h2>Electronics</h2>
        <img src={window.electronics} alt="Electronics" />
      </Link>
      {/* <Link className="card" onClick={() => props.fetchProducts('', 'Manga')} to="/products?search=&category=Manga">
        <h2>Manga</h2>
      </Link> */}
      <a className="back-to-top" href="#">Back to top</a>
    </section>
  </div>
)
}

export default Splash;