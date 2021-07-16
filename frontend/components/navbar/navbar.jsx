import React from 'react';
import SearchbarContainer from './searchbar_container'
import SessionStatusContainer from './session_status_container';
import CartContainer from './cart_container';
import DeliverTo from './deliver_to';
import Flag from './flag';
import Returns from './returns';
import CategoryNavbarContainer from './category_navbar_container';
import { DarkLogo } from './logo';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar">
        <DarkLogo />
        <SearchbarContainer/>
        <SessionStatusContainer />
        <DeliverTo />
        <Flag />
        <Returns />
        <CartContainer />
      </nav>
      <CategoryNavbarContainer />
    </div>
  )
};

export default Navbar;