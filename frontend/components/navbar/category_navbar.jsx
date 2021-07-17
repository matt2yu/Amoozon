import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNavbar = props => {
  return(
    <div className="category-navbar">
      <Link onClick={() => props.fetchProducts('', 'Electronics')} to="/products?search=&category=Electronics%20">
        <h2>Electronics</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Books & Moo-vies')} to="/products?search=&category=Books%20and%20Moo-vies">
        <h2>Books & Moo-vies</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Food & Grocery')} to="/products?search=&category=Food%20&%20Grocery">
        <h2>Food & Grocery</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Beauty & Health')} to="/products?search=&category=Beauty%20&%Health">
        <h2>Beauty & Health</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Games & Toys')} to="/products?search=&category=Games%20&%20Toys">
        <h2>Games & Toys</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Fashion & Jewlery')} to="/products?search=&category=Fashion%20&%Jewelry">
        <h2>Fashion & Jewlery</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Home & Garden')} to="/products?search=&category=Home%20&%20Garden">
        <h2>Home & Garden</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Sports & Outdoors')} to="/products?search=&category=Sports%20&%20Outdoors">
        <h2>Sports & Outdoors</h2>
      </Link>
    </div>
  )
};

export default CategoryNavbar;