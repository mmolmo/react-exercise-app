import React, { useState, useEffect } from 'react';
import playIcon from '../../img/play_arrow_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import pauseIcon from '../../img/pause_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import resetIcon from '../../img/replay_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import backIcon from '../../img/arrow_back_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';

//links: 
//https://react.dev/reference/react/useEffect
//https://www.youtube.com/watch?v=xgFgZBijW7M
//https://www.quora.com/How-do-you-convert-milliseconds-to-hours
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval


function DurationExercise({ exerciseName, onGoBack }) {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if (start === true) {
      interval = setInterval(() => {
        // sets timer in milliseconds
        setTimer((timer) => timer + 10);
      }, 10);
    } else if (start === false) {
      clearInterval(interval);
    }

    // cleanup function that clears interval on unmount
    return () => clearInterval(interval);
  }, [start])

  return (
    <>
      <h2 className="exercise-title"> Duration Exercise: {exerciseName} </h2>
      <p>Do it for as long as you can!</p>
      <p className="important-counter" >{Math.floor(((timer / 1000) / 60) / 60)}h : {Math.floor((timer / 1000) / 60)}m : {Math.floor((timer / 1000))}s </p>
      
      <ul className="options-selection">
        <li>
          <button onClick={onGoBack} className="back-button">
            <img src={backIcon} alt="back button" className="button-icon" />
          </button>
        </li>
        <li>
          <button onClick={() => setStart(!start)} className="play-button">{
            start ? <img src={pauseIcon} alt="pause button" className="button-icon" /> 
            : <img src={playIcon} alt="play button" className="button-icon" />
          }
          </button>
        </li>
        <li>
          <button onClick={() => setTimer(0)}> 
            <img src={resetIcon} alt="reset timer button" className="button-icon" />
          </button>
        </li>
      </ul>
    </>
  )
  }
  
  export default DurationExercise;