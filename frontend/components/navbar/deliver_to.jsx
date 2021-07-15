import React from 'react';
import { AddressPin } from './address_pin';
import { GiTexas } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const DeliverTo = (props) => {
  return(
    <div className="address-nav">
      <Link className="address" to='/login'>
        <p className="nav-small">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deliver to {props.currentUser}</p>
        <p className="bold"><AddressPin/>&nbsp;Austin 78712</p>
      </Link>
        <div className="location">
          <p className="location-box">
            <GiTexas fill="black"/>
            <span className="location-text">Austin, TX</span>
          </p>
        </div>
    </div>
  )
};

export default DeliverTo;