import React, { useState } from 'react';
import userPhoto from '../images/image-jeremy.png';
import { useGlobalContext } from './context';
function User() {
  const { time, displayPage } = useGlobalContext();
  return (
    <div className='profile-container'>
      <div className='user-info-container'>
        <img src={userPhoto} alt='' className='user-image' />
        <div className='user-info'>
          <p>Report for </p>
          <h4 className='user-name'>Jeremy Robson</h4>
        </div>
      </div>
      <div className='time-select-container'>
        <button className='btn-time active' onClick={(e) => displayPage(e)}>
          Daily
        </button>
        <button className='btn-time' onClick={(e) => displayPage(e)}>
          Weekly
        </button>
        <button className='btn-time' onClick={(e) => displayPage(e)}>
          Monthly
        </button>
      </div>
    </div>
  );
}

export default User;
