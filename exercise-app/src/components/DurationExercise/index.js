import React, { useState, useEffect } from 'react';

//icon imports
import playIcon from '../../img/play_arrow_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import stopIcon from '../../img/stop_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import resetIcon from '../../img/replay_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import backIcon from '../../img/arrow_back_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';

//links: 
// https://react.dev/reference/react/useEffect
// https://www.youtube.com/watch?v=xgFgZBijW7M
// https://www.quora.com/How-do-you-convert-milliseconds-to-hours
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_padding1 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
// https://stackoverflow.com/questions/32307483/in-javascript-how-to-create-an-accurate-timer-with-milliseconds

//exerciseName, exerciseImage, onGoBack are props from App.js
function DurationExercise({ exerciseName, exerciseImage, onGoBack }) {
  // state variables for timer and start
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start === true) {

      //sets the start time to the current time if it is the first time the timer is started
      if (startTime === 0) {
        setStartTime(Date.now() - timer);
        console.log("First time timer started");
      }
      //sets the timer to the current time minus the start time to avoid delays
      //const startTime = Date.now() - timer;
      
      interval = setInterval(() => {
        // sets timer in milliseconds using setInterval
        setTimer(Date.now() - startTime);
      }, 10);
    } else if (start === false) {
      //clears the timer
      clearInterval(interval);
    }

    // cleanup function that clears interval on unmount
    return () => clearInterval(interval);
  }, [start, startTime])
  
  const handleReset = () => {
    setTimer(0);
    // Reset the timestamp
    setStartTime(0);  
    if (start) {
      // if timer is running, immediately set new timestamp
      setStartTime(Date.now());
      console.log("Timer reset");
    }
  };

  //converts time based on milliseconds and the formula from the links above
  let hours = Math.floor(timer / (1000 * 60 * 60));
  let minutes = Math.floor((timer / (1000 * 60)) % 60);
  let seconds = Math.floor((timer / 1000) % 60);

  //formats time by adding a 0 string before the number if it's less than 10.
  const formatTime = (time) => {
    return String(Math.floor(time)).padStart(2,"0");
  };

  // displays the timer and buttons to start/stop the timer.
  return (
    <div className="exercise-bg"
      style={{
        backgroundImage: `
          linear-gradient( 
            rgb(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0)
          ),
          url(${exerciseImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundBlendMode: 'multiply',
      }}
    >
      <h2 className="exercise-title"> Duration Exercise: {exerciseName} </h2>
      <p>Do it for as long as you can!</p>
      <p className="important-counter" >{formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}</p>
      
      <ul className="options-selection">
        <li>
          <button onClick={onGoBack} className="back-button">
            <img src={backIcon} alt="back button" className="button-icon" />
          </button>
        </li>
        <li>
          <button onClick={() => setStart(!start)} className="play-button">{
            start ? <img src={stopIcon} alt="stop button" className="button-icon" /> 
            : <img src={playIcon} alt="play button" className="button-icon" />
          }
          </button>
        </li>
        <li>
          <button onClick={handleReset}> 
            <img src={resetIcon} alt="reset timer button" className="button-icon" />
          </button>
        </li>
      </ul>
    </div>
  )
  }
  
  export default DurationExercise;