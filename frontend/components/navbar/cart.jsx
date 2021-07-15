import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Cart = (props) => {
  let cartCount = props.cart_items.map(item=> item.quantity);
  cartCount = cartCount.reduce((a,b)=>a+b,0);
  const loggedIn = () => (
    <Link to="/cart" className="cart bold">
      <FiShoppingCart className="cart-icon"/>
      <span>&nbsp;Cart</span>
      <div className="cart-count">{cartCount}</div>
    </Link>
  );

  const loggedOut = () => (
    <Link to="/login" className="cart bold">
      <FiShoppingCart className="cart-icon" />
      <span>&nbsp;Cart</span>
    </Link>
  );

  return props.currentUser ? loggedIn() : loggedOut()
};

export default Cart;