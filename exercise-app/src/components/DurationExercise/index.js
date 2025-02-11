import React, { useState, useEffect } from 'react';

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
        <h2>Duration Exercise: {exerciseName} </h2>
        <p>Do it for as long as you can!</p>
        <p>Time: {Math.floor(((timer / 1000) / 60) / 60)}h : {Math.floor((timer / 1000) / 60)}m : {Math.floor((timer / 1000))}s </p>
        <button onClick={() => setStart(!start)}>{start ? "Pause Timer" : "Start Timer"}</button>
        <button onClick={() => setTimer(0)}> Reset Timer</button>
        <button onClick={onGoBack}>Back to Main Menu</button>
      </>
    )
  }
  
  export default DurationExercise;