import React from 'react';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import FC from './Components/FunctionalComp'; 
//I can rename my export component name
import Click from "./Components/Click";
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>Hello! Welcome to Martha First React Code</h1>
      <h1> This project is about Components</h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
