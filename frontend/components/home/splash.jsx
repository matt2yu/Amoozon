import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../navbar/footer';

const Splash = props => {
  return(
  <div className="splash-page">
    <div className="amoozon-banner">
      <img className="hero-image" src={window.splashbg} alt="splash page background" />
    </div>
    <section className="cards">

      <Link className="card" onClick={() => props.fetchProducts('', 'Electronics')} to="/products?search=&category=Electronics">
        <h2>Electronics</h2>
        <img src={window.electronics} alt="Electronics" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Books & Moo-vies')} to="/products?search=&category=Books%20&%20Movies">
        <h2>Books & Moo-vies</h2>
        <img src={window.booksAndMovies} alt="Books & Moo-vies" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Food & Grocery')} to="/products?search=&category=Food%20&%20Grocery">
        <h2>Food & Grocery</h2>
        <img src={window.foodAndGrocery} alt="Food & Grocery" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Beauty & Health')} to="/products?search=&category=Beauty%20&%20Health">
        <h2>Beauty & Health</h2>
        <img src={window.beautyAndHealth} alt="Beauty & Health" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Games & Toys')} to="/products?search=&category=Games%20&%20Toys">
        <h2>Games & Toys</h2>
        <img src={window.gamesAndToys} alt="Games & Toys" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Fashion & Jewlery')} to="/products?search=&category=Fashion%20&%20Jewlery">
        <h2>Fashion & Jewlery</h2>
        <img src={window.fashionAndJewlery} alt="Fashion & Jewlery" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Home & Garden')} to="/products?search=&category=Home%20&%20Garden">
        <h2>Home & Garden</h2>
        <img src={window.homeAndGarden} alt="Home & Garden" />
      </Link>

      <Link className="card" onClick={() => props.fetchProducts('', 'Sports & Outdoors')} to="/products?search=&category=Sports%20&%20Outdoors">
        <h2>Sports & Outdoors</h2>
        <img src={window.sportsAndOutdoors} alt="Sports & Outdoors" />
      </Link>

      <a className="back-to-top" href="#">Back to top</a>

      <Footer />
    </section>
  </div>
)
}

export default Splash;