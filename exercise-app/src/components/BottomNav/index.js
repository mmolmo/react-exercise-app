import React, { useState, useEffect } from 'react';

import homeIcon from '../../img/nav/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import fitnessIcon from '../../img/nav/fitness_center_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import calendarIcon from '../../img/nav/calendar_today_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import statsIcon from '../../img/nav/bar_chart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
// import minusIcon from '../../img/remove_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg';

const BottomNav = ({ onNavigate, navdata, currentScreen }) => {
  

  return (
    <div className="bottom-nav"
      style={{}}
    >
    <ul className="nav-links">
      <li className='nav-link'>
        {/* <button onClick={() => setStart(!start)} className="play-button">{
            start ? <img src={stopIcon} alt="stop button" className="button-icon" /> 
            : <img src={playIcon} alt="play button" className="button-icon" />
          }
        </button> */}
        <button className={currentScreen === 'homemenu' ? 'nav-button-active' : ''}
        // onClick={() => onNavigate('homemenu')}
        >
          <img src={homeIcon} alt="home button" className="nav-icon" />
          <p>Home</p>
        </button>
      </li>
      <li className='nav-link'>
        <button className={currentScreen === 'exercisemenu' ? 'nav-button-active' : ''}
        onClick={() => onNavigate('exercisemenu')}>
          <img src={fitnessIcon} alt="fitness button" className="nav-icon"/>
          <p>Exercise</p>
        </button>
      </li>
      <li className='nav-link'>
        <button className={currentScreen === 'calendarmenu' ? 'nav-button-active' : ''}
        // onClick={() => onNavigate('calendarmenu')}
        >
          <img src={calendarIcon} alt="calendar button" className="nav-icon" />
          <p>Calendar</p>
        </button>
      </li>
      <li className='nav-link'>
       <button className={currentScreen === 'statsmenu' ? 'nav-button-active' : ''}
        onClick={() => onNavigate('statsmenu')}>
          <img src={statsIcon} alt="stats button" className="nav-icon" />
          <p>Stats</p>
        </button>
      </li>
    </ul>
    </div>
  );
};
  
export default BottomNav;