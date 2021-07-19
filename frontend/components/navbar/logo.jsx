import React from 'react';
import { Link } from 'react-router-dom';

export const DarkLogo = () => {
  return(
    <Link className="dark-logo" to="/"><img src={window.darkLogo} alt="amoozon logo" /></Link>
  )
};

export const LightLogo = () => {
  return(
    <Link className="light-logo" to="/"><img src={window.lightLogo} alt="amoozon logo" /></Link>
  )
}