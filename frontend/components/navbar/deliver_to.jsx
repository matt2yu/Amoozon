import React from 'react';
import { AddressPin } from './address_pin';
import { GiTexas } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const DeliverTo = (props) => {
  const loggedIn = () => (
    <div className="address-nav">
      <Link className="address" to='/login'>
        <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deliver to {props.currentUser.first_name}</p>
        <p className="boldaddy"><AddressPin/>&nbsp;Houston 12345</p>
      </Link>
        <div className="location">
          <p className="location-box">
            <GiTexas fill="black"/>
            <span className="location-text">Houston, TX</span>
          </p>
        </div>
    </div>
  ) 

  const loggedOut = () => (
    <div className="address-nav">
    <div className="address">
      <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello</p>
      <p className="boldaddy"><AddressPin/>&nbsp;Select your address</p>
    </div>
      <div className="location">
        <p className="location-box">
          <GiTexas fill="black"/>
          <span className="location-text">Houston, TX</span>
        </p>
      </div>
  </div>
  )
  return props.currentUser ? loggedIn() : loggedOut()
};



export default DeliverTo;

