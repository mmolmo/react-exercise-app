import React, { useState } from 'react';

const RepetitionScreen = ({ exerciseName, onGoBack }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Repetition Exercise: {exerciseName} </h2>
      <p>Do as many as you can!</p>
      <p>Reps: {count}</p>
      <button onClick={() => setCount(count + 1)}> ++ Counter</button>
      <button onClick={() => setCount(0)}> Reset Counter</button>
      <button onClick={onGoBack}>Back to Main Menu</button>
    </>
  );
};
  
  export default RepetitionScreen;