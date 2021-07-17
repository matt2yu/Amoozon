import React from 'react';
import SearchbarContainer from './searchbar_container'
import SessionStatusContainer from './session_status_container';
import CartContainer from './cart_container';
import DeliverToContainer from './deliver_to_container';
import Flag from './flag';
import Returns from './returns';
import CategoryNavbarContainer from './category_navbar_container';
import { DarkLogo } from './logo';

const Navbar = () => {
  return(
    <div>
      <nav className="navbar">
        <DarkLogo />
        <DeliverToContainer />
        <SearchbarContainer/>
        <Flag />
        <SessionStatusContainer />
        <Returns />
        <CartContainer />
      </nav>
      <CategoryNavbarContainer />
    </div>
  )
};

export default Navbar;