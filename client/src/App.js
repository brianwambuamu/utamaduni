import React from 'react';
import Home from './components/pages/home';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <>
    <Router> 
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
    </Router>
    </>
  )
}

export default App
