import React from 'react';
import userPhoto from '../images/image-jeremy.png';

function User() {
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
        <button
          className='btn-time active'
          onClick={(e) => console.log(e.target)}
        >
          Daily
        </button>
        <button className='btn-time' onClick={() => console.log('clicked')}>
          Weekly
        </button>
        <button className='btn-time' onClick={() => console.log('clicked')}>
          Monthly
        </button>
      </div>
    </div>
  );
}

export default User;
