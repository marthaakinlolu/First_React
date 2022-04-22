import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CreatePage from './components/CreatePage';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/'element={<Home/>}></Route>
          <Route path="/createpage" element={<CreatePage />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
