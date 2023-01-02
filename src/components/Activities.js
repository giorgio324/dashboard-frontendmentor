import React from 'react';
import dots from '../images/icon-ellipsis.svg';
function Activities() {
  return (
    <div className='activities-container'>
      <div className='activity'>
        <div className='activity-header work'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>work</h6>
            <h4>32hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>last week - 36hrs</p>
          </div>
        </div>
      </div>
      <div className='activity'>
        <div className='activity-header game'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>Play</h6>
            <h4>10hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>Last Week - 8hrs</p>
          </div>
        </div>
      </div>
      <div className='activity'>
        <div className='activity-header read'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>Study</h6>
            <h4>4hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>Last Week - 8hrs</p>
          </div>
        </div>
      </div>
      <div className='activity'>
        <div className='activity-header run'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>Excercise</h6>
            <h4>4hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>Last Week - 5hrs</p>
          </div>
        </div>
      </div>
      <div className='activity'>
        <div className='activity-header chat'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>Social</h6>
            <h4>5hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>Last Week - 10hrs</p>
          </div>
        </div>
      </div>
      <div className='activity'>
        <div className='activity-header health'></div>
        <div className='activity-content'>
          <div className='left'>
            <h6>Self Care</h6>
            <h4>2hrs</h4>
          </div>
          <div className='right'>
            <img src={dots} alt='' className='dots' />
            <p>Last Week - 2hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
