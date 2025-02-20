
//icon imports
// import durationIcon from '../../img/timer_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
// import repIcon from '../../img/repeat_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
// import backIcon from '../../img/arrow_back_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';

const StatsMenuScreen = () => {
  return (
    <main className="StatsMenuScreen">
      <header className="dashboard-header">
        <h1 className="menu-title">STATISTICS</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-chart">
          <path d="M3 3v18h18"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      </header>

      <section className="card weekly-overview">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-activity">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          Weekly Overview
        </h2>
        
        <div className="weekly-chart">
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{"--height": "75%"}}></div>
            </div>
            <span className="day-label">Mon</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{"--height": "50%"}}></div>
            </div>
            <span className="day-label">Tue</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{ height: 100 }}></div>
            </div>
            <span className="day-label">Wed</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{ height : 25 }}></div>
            </div>
            <span className="day-label">Thu</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{ height : 75 }}></div>
            </div>
            <span className="day-label">Fri</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{ height : 50 }}></div>
            </div>
            <span className="day-label">Sat</span>
          </div>
          <div className="chart-column">
            <div className="bar-container">
              <div className="bar" style={{ height : 0 }}></div>
            </div>
            <span className="day-label">Sun</span>
          </div>
        </div>
      </section>

      <section className="card achievements">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-trophy">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
          Achievements
        </h2>
        
        <ul className="achievement-list">
          <li className="achievement-item">
            <div className="achievement-header">
              <span className="achievement-name">7 Day Streak</span>
              <span className="achievement-progress">5/7</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{"--width": "71.4286%"}}></div>
            </div>
          </li>
          <li className="achievement-item">
            <div className="achievement-header">
              <span className="achievement-name">100 Push-ups</span>
              <span className="achievement-progress">75/100</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{"--width": "75%"}}></div>
            </div>
          </li>
          <li className="achievement-item">
            <div className="achievement-header">
              <span className="achievement-name">1000 lb Club</span>
              <span className="achievement-progress">850/1000</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{"--width": "85%"}}></div>
            </div>
          </li>
        </ul>
      </section>

      <section className="card monthly-view">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-calendar">
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          This Month
        </h2>
        
        <div className="calendar-grid">
          <div className="calendar-row">
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day "></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
            <div className="calendar-day has-workout"></div>
          </div>
        </div>
      </section>
    </main>

  )
}
export default StatsMenuScreen;