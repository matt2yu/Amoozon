import React from 'react';
import SearchbarContainer from './searchbar_container'
import SessionStatusContainer from './session_status_container';


const Navbar = () => {
  return(
    <div>
      <nav className="navbar">
        <SearchbarContainer/>
        <SessionStatusContainer />
      </nav>
    </div>
  )
};

export default Navbar;