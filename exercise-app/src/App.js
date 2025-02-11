import React, { useState } from "react";

import "./App.css"
import MainMenuApp from "./components/MainMenuApp"
import RepetitionScreen from "./components/RepetitionExercise";
import DurationScreen from "./components/DurationExercise";

//links:
// passing multiple values in useState from here:
//https://dev.to/govindbisen/storing-multiple-values-in-one-state-177d
//https://dev.to/harlessmark/short-circuit-evaluation-with-react-3dn4

function App() {

  const exerciseValues = {
    screen: "menu",
    name: "",
  }
  
  // does what setscreen does with the name passed in as another param
  const [exercise, setExercise] = useState(exerciseValues);

  //const [screen, setScreen] = useState("menu");

  let exerciseData = [
    {
      id: "pushups",
      name: "Push Ups",
      type: "repetition",
    },
    {
      id: 'jumpingjacks',
      name: 'Jumping Jacks',
      type: 'repetition',
    },
    {
      id: 'running',
      name: 'Running',
      type: 'duration',
    },
    {
      id: 'plank',
      name: 'Plank',
      type: 'duration',
    }
  ]

  //const handleExerciseSelect = (type) => setScreen(type);

  // does what handleExerciseSelect does with the screen as the type, and the name passed in as another param
  const handleExerciseSelect = (type, name) => {
    setExercise({ ...exercise, screen: type, name });
  };

  //const handleGoBack = () => { setScreen("menu"); };

  const handleGoBack = () => {
    setExercise({ ...exercise, screen: "menu", name: "" });
  };


  // render the components if the condition is true, otherwise render nothing. acts as a menu switch
  return (
    <>
      <div className="App">
      <h1>Let's Get Moving!</h1>
        {exercise.screen === "menu" && <MainMenuApp data={exerciseData} onSelectExercise={handleExerciseSelect} />}
        {exercise.screen === "repetition" && <RepetitionScreen exerciseName={exercise.name} onGoBack={handleGoBack} />}
        {exercise.screen === "duration" && <DurationScreen exerciseName={exercise.name} onGoBack={handleGoBack} />}
      </div>
    </>
  )
}

export default App