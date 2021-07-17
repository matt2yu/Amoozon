import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from 'react-icons/io';

const Flag = () => (
  <div className="flag">
    <img src={window.usflag} alt="USA User Location" />
    <GoTriangleDown fill="gray" className="dropdown-arrow"/>
    <div className="language">
      <span>English - EN</span>
      <IoMdRadioButtonOn fill="gray" className="radio-button"/>
      <br />
      <span>Español - ES</span>
      <IoMdRadioButtonOff fill="gray" className="radio-button"/>
    </div>
   
  </div>
);

export default Flag;