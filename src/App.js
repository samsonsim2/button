import logo from './logo.svg';
import './App.css';
 
import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import BigButton from './pages/BigButton';
import Roller from './pages/Roller';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Roller />} />
      <Route path="/button" element={<BigButton />} />
    </Routes>
  );
}

export default App;
