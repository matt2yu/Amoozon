import React from 'react';
import { Link } from 'react-router-dom';

export const DarkLogo = () => {
  return(
    <Link className="dark-logo" to="/"><img src={window.darkLogo} alt="amoozon logo" /></Link>
  )
};

