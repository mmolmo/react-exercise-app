import React, { useState } from 'react';

const RepetitionScreen = ({ exerciseName, onGoBack }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="exercise-title">Repetition Exercise: {exerciseName} </h2>
      <p>Do as many as you can!</p>
      <p className="important-counter">Reps: {count}</p>
      <ul className="options-selection">
        <li>
          <button className="increase-button" onClick={() => setCount(count + 1)}> ++ Counter</button>
        </li>
        <li>
          <button onClick={() => setCount(0)}> Reset Counter</button>
        </li>
        <li>
          <button onClick={onGoBack}>Back to Main Menu</button>
        </li>
      </ul>
    </>
  );
};
  
export default RepetitionScreen;