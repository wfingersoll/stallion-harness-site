import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Harness from './Pages/Harness';
import { useState } from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harness" element={<Harness />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
