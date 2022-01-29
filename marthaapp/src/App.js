import React from 'react';
import {ClassComp, ClassComp1} from './Components/ClassComp';
//import logo from './logo.svg';
//import './App.css';
import FC from './Components/FunctionalComp'; //I can rename my export component name

function App() {
  return (
    <div>
      <h1>Hello! Welcome to Martha First React Code</h1>
      <h1> This project is about Components</h1>
      <FC />
      <ClassComp />
      <ClassComp1 />
    </div>
  );
}

export default App;
