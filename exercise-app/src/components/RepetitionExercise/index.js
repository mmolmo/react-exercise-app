import React, { useState } from 'react';

import resetIcon from '../../img/replay_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import backIcon from '../../img/arrow_back_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import plusIcon from '../../img/add_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz48.svg';
import minusIcon from '../../img/remove_24dp_UNDEFINED_FILL0_wght400_GRAD0_opsz24.svg';

const RepetitionScreen = ({ exerciseName, onGoBack }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="exercise-title">Repetition Exercise: {exerciseName} </h2>
      <p>Do as many as you can!</p>
      <p className="important-counter">{count}</p>
      <ul className="options-selection">
        <li>
          <button onClick={onGoBack} className="back-button">
            <img src={backIcon} alt="back button" className="button-icon" /> 
          </button>
        </li>
        <li>
          <button className="increase-button" onClick={() => setCount(count + 1)}>
            <img src={plusIcon} alt="plus counter button" className="button-icon" /> 
          </button>
        </li>
        <li>
          <button onClick={() => setCount(0)}>
            <img src={resetIcon} alt="reset button" className="button-icon" /> 
          </button>
        </li>
      </ul>
    </>
  );
};
  
export default RepetitionScreen;