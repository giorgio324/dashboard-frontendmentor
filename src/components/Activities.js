import React from 'react';
import dots from '../images/icon-ellipsis.svg';
import { data } from '../data';
import { useGlobalContext } from './context';
function Activities() {
  const { time } = useGlobalContext();
  return (
    <div className='activities-container'>
      {data.map((activity, index) => {
        return (
          <div className='activity' key={index}>
            <div
              className={`activity-header ${activity.title
                .toLocaleLowerCase()
                .replace(/ /g, '-')}`}
            ></div>
            <div className='activity-content'>
              <div className='left'>
                <h6>{activity.title}</h6>
                <h4>{activity.timeframes[`${time}`].current}hrs</h4>
              </div>
              <div className='right'>
                <img src={dots} alt='' className='dots' />
                <p>
                  last{' '}
                  {time === 'daily'
                    ? 'day'
                    : '' || time === 'weekly'
                    ? 'week'
                    : '' || time === 'monthly'
                    ? 'month'
                    : ''}{' '}
                  - {activity.timeframes[`${time}`].previous}
                  hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Activities;
