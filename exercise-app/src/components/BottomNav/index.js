import React, { useState } from 'react';

import homeIcon from '../../img/nav/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import fitnessIcon from '../../img/nav/fitness_center_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import calendarIcon from '../../img/nav/calendar_today_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
import statsIcon from '../../img/nav/bar_chart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.svg';
// import minusIcon from '../../img/remove_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg';

const BottomNav = ({onNavigate }) => {
  
  return (
    <div className="bottom-nav"
      style={{}}
    >
      <img src={homeIcon} alt="home button" className="nav-icon" />
      <img src={fitnessIcon} alt="fitness button" className="nav-icon" onClick={() => onNavigate()}/>
      <img src={calendarIcon} alt="calendar button" className="nav-icon" />
      <img src={statsIcon} alt="stats button" className="nav-icon" />
    </div>
  );
};
  
export default BottomNav;