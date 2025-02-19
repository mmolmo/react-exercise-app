import React, { useState } from "react";

import "./App.css"
import MainMenuScreen from "./components/MainMenuScreen";
import RepetitionScreen from "./components/RepetitionExercise";
import DurationScreen from "./components/DurationExercise";
import WeightScreen from "./components/WeightExercise";
import StatsMenuScreen from "./components/StatsMenuScreen";
import HomeMenuScreen from "./components/HomeMenuScreen";

import BottomNav from "./components/BottomNav"; 

//links:
// passing multiple values in useState from here:
//https://dev.to/govindbisen/storing-multiple-values-in-one-state-177d
//https://dev.to/harlessmark/short-circuit-evaluation-with-react-3dn4

function App() {

  const exerciseValues = {
    screen: "menu",
    name: "",
    image: "",
  }
  
  // does what setscreen does with the name passed in as another param
  const [exercise, setExercise] = useState(exerciseValues);

  //const [screen, setScreen] = useState("menu");

  //exerciseData is passed into the MainMenuScreen component to be processed
  let exerciseData = [
    {
      id: "pushups",
      name: "Push Ups",
      type: "repetition",
      image: "https://images.unsplash.com/photo-1603503364272-6e28e046b37a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 'jumpingjacks',
      name: 'Jumping Jacks',
      type: 'repetition',
      image: "https://images.unsplash.com/photo-1510487156526-04f33237c1e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 'running',
      name: 'Running',
      type: 'duration',
      image: 'https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 'plank',
      name: 'Plank',
      type: 'duration',
      image: 'https://plus.unsplash.com/premium_photo-1672352100050-65cb2ee4d818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, 
    {
      id: 'benchpress',
      name: 'Bench Press',
      type: 'weight',
      image: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?auto=format&fit=crop&q=80&w=2000',
    }  
  ]

  let screenNavData = [
    {
      screenname: "exercisemenu",
    },
    {
      screenname: 'statsmenu',
    }  
  ]

  
  const [isExercise, setExerciseModeToggle] = useState(false); // Default to menu screen

  const [currentScreen, setCurrentScreen] = useState('exercisemenu');

  //const handleExerciseSelect = (type) => setScreen(type);

  // sets the exercise screen(type) to be displayed using usestate, and the name / images passed in as another param
  // commented out function above was the initial process, but the one below is more suited for this situation
  const handleExerciseSelect = (type, name, image) => {
    setExercise({ ...exercise, screen: type, name, image });
    setExerciseModeToggle(true);
  };

  //const handleGoBack = () => { setScreen("menu"); };

  // sets the screen back the main menu
  const handleGoBack = () => {
    setExercise({ ...exercise, screen: "menu", name: "", image: "" });
    setExerciseModeToggle(false);
    setCurrentScreen("exercisemenu");
  };

  const handleNavSelect = (screenname) => {
    console.log('navbar button press');
    setCurrentScreen(screenname);
    console.log(currentScreen);
  };

  // Short circuit evaluation: render the components if the condition is true, otherwise render nothing. acts as a menu switch
  // passes the appropriate props to each screen
  return (
    <>
      <main className="App">
         {currentScreen === "homemenu" && <StatsMenuScreen />}
        {currentScreen === "statsmenu" && <StatsMenuScreen />}
        {/* {exercise.screen === "menu" && <MainMenuScreen data={exerciseData} onSelectExercise={handleExerciseSelect} navdata={screenNavData}/>} */}
        {currentScreen === "exercisemenu" && exercise.screen === "menu" && 
        <MainMenuScreen data={exerciseData} onSelectExercise={handleExerciseSelect} navdata={screenNavData}/>}
        {exercise.screen === "repetition" && <RepetitionScreen exerciseName={exercise.name} exerciseImage={exercise.image} onGoBack={handleGoBack} />}
        {exercise.screen === "duration" && <DurationScreen exerciseName={exercise.name} exerciseImage={exercise.image} onGoBack={handleGoBack} />}
        {exercise.screen === "weight" && <WeightScreen exerciseName={exercise.name} exerciseImage={exercise.image} onGoBack={handleGoBack} />}
        {!isExercise && (
          <BottomNav onNavigate={handleNavSelect} navdata={screenNavData} currentScreen={currentScreen} />
        )}
      </main>
    </>
  )
}

export default App