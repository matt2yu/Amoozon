import React from 'react';
import SearchbarContainer from './searchbar_container'
import SessionStatusContainer from './session_status_container';
import CartContainer from './cart_container';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar">
        <SearchbarContainer/>
        <SessionStatusContainer />
        <CartContainer />
      </nav>
    </div>
  )
};

export default Navbar;