import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Harness from './Pages/Harness';
import { useState } from 'react';
import Home from './Pages/Home';
import Siderbar from './Components/Siderbar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Siderbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harness" element={<Harness />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
